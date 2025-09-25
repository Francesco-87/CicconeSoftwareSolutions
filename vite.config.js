// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'resources',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        projects: resolve(__dirname, 'src/pages/projects.html'),
      },
    },
  },
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
})
