import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ //hello
  plugins: [react()],
  base: '/Website/', 
});
