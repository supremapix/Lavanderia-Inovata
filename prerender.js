import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 4173; // Porta temporária para o servidor de build

// Função para extrair URLs do sitemap.xml
function getRoutesFromSitemap() {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️ Sitemap não encontrado em dist/sitemap.xml. Pré-renderizando apenas a Home.');
    return ['/'];
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  // Regex simples para pegar o conteúdo dentro de <loc>
  const regex = /<loc>(.*?)<\/loc>/g;
  const routes = [];
  let match;

  while ((match = regex.exec(sitemapContent)) !== null) {
    const fullUrl = match[1];
    // Remove o domínio para pegar apenas o caminho relativo (ex: https://site.com/sobre -> /sobre)
    // Assume que o domínio no sitemap é o de produção ou localhost
    try {
      const urlObj = new URL(fullUrl);
      // Ignora links com hash (ex: /#bairros) pois são âncoras na mesma página
      if (!urlObj.hash) {
        routes.push(urlObj.pathname);
      }
    } catch (e) {
      console.error(`Erro ao processar URL do sitemap: ${fullUrl}`);
    }
  }

  // Remove duplicatas e garante que a home '/' esteja incluída
  return [...new Set(routes)].filter(r => r);
}

async function prerender() {
  console.log('🚀 Iniciando pré-renderização (SSG)...');

  // 1. Iniciar um servidor estático simples para servir o 'dist'
  const app = express();
  app.use(express.static(DIST_DIR));
  
  // Fallback para SPA (necessário para o puppeteer navegar antes de salvar)
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(PORT);
  console.log(`📡 Servidor de build rodando em http://localhost:${PORT}`);

  // 2. Iniciar o Puppeteer
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Necessário para alguns ambientes CI/CD
  });

  const routes = getRoutesFromSitemap();
  console.log(`📄 Rotas encontradas: ${routes.length}`);

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      
      // Definir Viewport para Mobile/Desktop (Desktop padrão para SEO)
      await page.setViewport({ width: 1280, height: 800 });

      const url = `http://localhost:${PORT}${route}`;
      console.log(`Generating: ${route}...`);

      // Navegar e esperar a rede ficar ociosa (garante que fetchs iniciais terminaram)
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

      // Esperar um pouco extra para animações ou scripts pesados (opcional)
      // await new Promise(r => setTimeout(r, 500));

      // Pegar o HTML final renderizado
      const html = await page.content();

      // Definir o caminho do arquivo de saída
      // Se a rota for '/', salva como index.html
      // Se for '/sobre', salva como sobre/index.html
      const filePath = route === '/' 
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route.substring(1), 'index.html');

      // Garantir que o diretório existe
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Salvar o arquivo
      fs.writeFileSync(filePath, html);
      console.log(`✅ Salvo: ${filePath}`);

      await page.close();
    } catch (err) {
      console.error(`❌ Erro ao renderizar ${route}:`, err);
    }
  }

  await browser.close();
  server.close();
  console.log('🎉 Pré-renderização concluída com sucesso!');
  
  // Opcional: Criar um arquivo 404.html copiando o index.html original (antes da hidratação)
  // Isso ajuda em servidores estáticos que buscam 404.html por padrão
  // Mas como sobrescrevemos o index.html principal com o conteúdo da Home, 
  // o ideal seria ter guardado o 'template' original. 
  // Para simplicidade, vamos deixar como está, pois a Home pré-renderizada servirá como shell se necessário.
}

prerender();
