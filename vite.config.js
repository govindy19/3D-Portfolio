import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Include GLB files as assets
  assetsInclude: ['**/*.glb'],

  build: {
    // Increase chunk warning size if needed
    chunkSizeWarningLimit: 1500, // 1500 kB, adjust as necessary

    rollupOptions: {
      output: {
        // Manual chunking to split large bundles
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three';
            if (id.includes('react')) return 'react';
            return 'vendor';
          }
        }
      }
    }
  }
});
