import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // Libera o acesso ao preview por qualquer host (sandbox, túneis, domínios de preview)
    allowedHosts: true,
  },
});
