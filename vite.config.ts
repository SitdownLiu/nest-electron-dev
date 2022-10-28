import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePluginElectronBuilder } from './plugin';

// https://vitejs.dev/config/
export default defineConfig({
  root: join(__dirname, 'src/render'),
  plugins: [
    vue(),
    VitePluginElectronBuilder({
      root: process.cwd(),
      preloadFile: join(__dirname, 'src/preload/index.ts'),
      tsconfig: './tsconfig.main.json',
      electronBuilderConfig: './electron-builder.config.js',
      external: ['@nestjs'],
    }),
  ],
  resolve: {
    alias: {
      '@render': join(__dirname, 'src/render'),
      '@main': join(__dirname, 'src/main'),
      '@common': join(__dirname, 'src/common'),
    },
  },
  base: './',
  build: {
    outDir: join(__dirname, 'dist/render'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/render/index.html'),
        login: resolve(__dirname, 'src/render/login.html'),
      },
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
