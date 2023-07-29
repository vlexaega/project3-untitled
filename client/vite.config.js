import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // The Vite PWA documentation was very helpful and provided example code for the plugin, please see the README for the link
    VitePWA({ 
      // injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,jsx,png,jpg,svg,ico}']
      },
      manifest: {
        name: 'untitled',
        short_name: 'untitledArt',
        description: 'virtual art gallery and marketplace',
        theme_color: '#fdb5a7',
        icons: [
          {
            src: './public/images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './public/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'  
          },
          {
            src: './public/images/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'  
          }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^index.html$/]
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
