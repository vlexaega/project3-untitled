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
        globPatterns: ['**/*.{js,css,html,jsx,png,jpg,svg,ico}']
      },
      manifest: {
        name: 'untitled',
        short_name: 'untitled',
        description: 'virtual art gallery and marketplace',
        theme_color: '#fdb5a7',
        icons: [
          {
            src: './public/images/logo_96x96',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: './public/images/logo_128x128',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: './public/images/logo_192x192',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './public/images/logo_512x512',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
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
