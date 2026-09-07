import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite config: adds React support and Tailwind processing
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
