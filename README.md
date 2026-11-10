# Lavanderia Inovata · Suprema 2.0

Site estático em português, publicado no projeto Vercel existente. Mantém identidade azul-marinho e dourado e os endereços das 17 localidades e 3 matérias anteriores.

## Executar
Node.js 20 ou posterior. Sem dependências de produção.

- `npm run build`: gera `dist/`, 42 páginas indexáveis e 404.
- `npm test`: valida estrutura, links internos, dados estruturados, textos, favicons e limites de assets.
- `npm run dev`: gera o site e inicia o servidor de prévia.

## Editar
- `scripts/build.mjs`: estrutura das páginas, serviços e informações de contato.
- `assets/site.css` e `assets/site.js`: aparência e interações.
- `content/articles.json`: dez guias completos.
- `content/locations.json`: dezessete localidades.
- `public/`: ícones, imagens e arquivos de verificação do Google.

O build falha se houver erro de sintaxe; os testes devem ser executados antes da publicação. O sitemap é gerado a partir das páginas reais. Rotas inexistentes respondem com a página 404, sem simular uma página inicial.

## Recursos
HTML pronto para indexação, títulos e descrições próprios, canonical, Open Graph, Twitter Card, WebSite, DryCleaningOrLaundry, BreadcrumbList, Service, BlogPosting e FAQPage conforme o conteúdo visível. `llms.txt` é suplementar e não promete indexação, ranking ou citações por IA.

Busca de regiões insensível a acentos, FAQs nativas, navegação por teclado, redução de movimento, formulário que prepara mensagem no WhatsApp, compartilhamento nativo/clipboard e CTA móvel. Não há cadastro, análise de audiência ou envio automático de formulários.

## Fontes visuais
A foto ilustrativa do cesto usa a imagem Unsplash `photo-1582735689369-4fe89db7114c`, já utilizada na versão anterior. Não representa instalações da Inovata. O logotipo da assinatura Suprema é o recurso público da referência aprovada: https://www.celularescuritibashopcell.com.br/img-ext/suprema-img-023a05.webp. O ícone da lavanderia é vetorial original. Arquivos antigos do cliente foram preservados em `public/`, mas não servem como evidência de instalações, avaliações ou resultados.

## Limites comerciais
Unidade: Av. César Abraão, 209, Osasco. Páginas de bairro não representam filiais. Cobertura, taxa, preço, prazo e métodos para cada peça precisam de confirmação com a lavanderia. Não publicar avaliações, certificações, garantias de remoção de manchas ou promessas médicas sem evidência.
