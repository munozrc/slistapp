import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.svg', 'robots.txt'],
  manifest: {
    name: 'Shopping List App',
    short_name: 'Shopping List',
    theme_color: '#ffffff',
    start_url: './',
    icons: [
      {
        src: 'logo192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'logo512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaOptions)
  ]
})
