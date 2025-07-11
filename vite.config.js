import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'src',
  base: './',               // leave this in place
  publicDir: '../public',   // point to the public/ folder at repo root
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    assetsDir: 'resources'
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
})