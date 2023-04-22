import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [react(), EnvironmentPlugin(['PORT', 'URL', 'TOKEN'])],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'istanbul',
      //   all: true,
      //   skillFull: true,
      reporter: 'text',
    },
  },
  ssr: { noExternal: ['@reduxjs/toolkit'] },
});
