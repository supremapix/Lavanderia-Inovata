import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 4173; // Build server port

// Helper to extract routes from sitemap.xml
function getRoutesFromSitemap() {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.warn('⚠️ Sitemap not found at dist/sitemap.xml. Prerendering Home only.');
    return ['/'];
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  // Updated regex to handle multi-line tags and whitespace
  const regex = /<loc>([\s\S]*?)<\/loc>/g;
  const routes = [];
  let match;

  while ((match = regex.exec(sitemapContent)) !== null) {
    const fullUrl = match[1].trim();
    try {
      const urlObj = new URL(fullUrl);
      if (!urlObj.hash) {
        routes.push(urlObj.pathname);
      }
    } catch (e) {
      console.error(`Error processing sitemap URL: ${fullUrl}`);
    }
  }

  return [...new Set(routes)].filter(r => r);
}

async function prerender() {
  console.log('🚀 Starting Prerender (SSG)...');

  const app = express();
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')));
  const server = app.listen(PORT);
  console.log(`📡 Build server running at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled'
    ]
  });

  const routes = getRoutesFromSitemap();
  console.log(`📄 Routes found: ${routes.length}`);

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      
      const UA_STRING = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 HeadlessChrome';

      // 1. Force UA at network level
      await page.setUserAgent(UA_STRING);

      // 2. Inject flags BEFORE any JS executes
      await page.evaluateOnNewDocument((ua) => {
        window.__PRERENDER__ = true;
        Object.defineProperty(navigator, 'userAgent', { get: () => ua });
      }, UA_STRING);

      await page.setViewport({ width: 1280, height: 800 });

      const url = `http://localhost:${PORT}${route}`;
      console.log(`Generating: ${route}...`);

      // 3. Load page
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

      const html = await page.content();
      
      const filePath = route === '/' 
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route.substring(1), 'index.html');

      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, html);
      console.log(`✅ Saved: ${filePath}`);

      await page.close();
    } catch (err) {
      console.error(`❌ Error rendering ${route}:`, err);
    }
  }

  await browser.close();
  server.close();
  console.log('🎉 Prerender complete!');
}

prerender();