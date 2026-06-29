import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      tmpDir: './node_modules/.tmp/.tanstack/tmp',
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    // https: {
    //   key: './cert/localhost-key.pem',
    //   cert: './cert/localhost.pem',
    // },
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
