// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: {
        app: 'resources/js/app.jsx',       // for frontend
        admin: 'resources/js/admin.jsx',   // for admin page
      },
      refresh: true,
    }),
    react(),
  ],
});
