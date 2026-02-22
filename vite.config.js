// vite.config.js
import { defineConfig } from 'vite'
import path from 'node:path'
import fs from 'node:fs'
import { resolve } from 'node:path'

function projectCaseStudyInputs() {
  const inputs = {}
  const projectsRoot = resolve(__dirname, 'src/projects')

  if (!fs.existsSync(projectsRoot)) return inputs

  for (const entry of fs.readdirSync(projectsRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const slug = entry.name
    const htmlPath = resolve(projectsRoot, slug, 'index.html')
    if (fs.existsSync(htmlPath)) {
      inputs[`project-${slug}`] = htmlPath
    }
  }
  return inputs
}

export default defineConfig({
  root: 'src',
  base: './',                 // for shareable URLs on Azure root
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: 'resources',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        ...projectCaseStudyInputs(),
      },
    },
  },
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
})
