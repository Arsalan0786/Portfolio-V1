import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Replace 'portfolio-v1' with your actual GitHub repo name if different
export default defineConfig({
  base: '/Portfolio-V1/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
