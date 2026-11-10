# Pacote de favicons · Lavanderia Inovata

Kit multiplataforma criado para este projeto, com organização compatível com a integração moderna recomendada por geradores como o RealFaviconGenerator. Não foi enviado a um serviço externo nem certificado por ele.

## Arquivos
- favicon.svg: original vetorial escalável, azul-marinho e dourado.
- favicon.ico: camadas 16, 32 e 48 px.
- favicon-16x16.png, 32x32, 48x48, 96x96, 180x180, 192x192 e 512x512.
- apple-touch-icon.png: ícone iOS 180 px.
- web-app-manifest-192x192.png e web-app-manifest-512x512.png.
- maskable-icon-512x512.png: área segura para recorte Android.
- safari-pinned-tab.svg: versão monocromática.
- site.webmanifest: nome, idioma, cores e ícones.
- browserconfig.xml: compatibilidade de bloco Windows.

## Integração
Todos os arquivos ficam na raiz pública. O HTML de todas as páginas já inclui favicon, apple-touch-icon, manifest, mask-icon, theme-color e browserconfig.

O manifesto não inclui service worker nem oferece funcionamento offline. Depois da publicação, navegadores e buscadores podem manter o favicon anterior em cache por algum tempo. A presença do arquivo não garante exibição imediata na busca.
