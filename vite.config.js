import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-V1/', // 👈 EXACTLY like this, case-sensitive
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
