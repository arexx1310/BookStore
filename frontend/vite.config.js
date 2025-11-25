import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://bookstore-1qov.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [
    react(),
    tailwind()
  ]
})
