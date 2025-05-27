import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    outDir: '../../src/main/resources/static', // Output to Spring Boot static folder
    emptyOutDir: true // Clear the static folder before building
  }
})
