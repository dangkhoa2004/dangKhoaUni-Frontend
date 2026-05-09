import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath, URL } from 'node:url' // Thêm dòng này

export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: false, 
    assetsDir: 'assets',
  },
  base: '/',
  resolve: {
    alias: {
      // Cấu hình @ trỏ đến thư mục src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})