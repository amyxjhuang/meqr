import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  base: '/meqr/',
  server: {
    host: '0.0.0.0',
    port: 3000 // or whatever port you're using
  }
})
