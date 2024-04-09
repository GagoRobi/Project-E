import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// Load and merge environment variables
const mode = process.env.NODE_ENV;
process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

// Now you can access your environment variables using process.env
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': process.env.VITE_BACKEND_URL
    },
  },
});