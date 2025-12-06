import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/blog-explore-js/storm-explainer/',
  build: {
    outDir: '../dist/storm-explainer',
    emptyOutDir: true,
  },
})
