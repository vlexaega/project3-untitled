import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,jsx,png,jpg,svg}']
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      } })
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  },
})
