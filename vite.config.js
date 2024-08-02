import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import compression from 'vite-plugin-compression';


dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' })
  ],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
