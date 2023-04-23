import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  build: { sourcemap: true },
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
    ,
    EnvironmentPlugin(['PORT', 'URL', 'TOKEN']),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'c8',
      reporter: 'text',
      skipFull: true,
    },
    exclude: [...configDefaults.exclude, 'instrumented'],
  },
  ssr: { noExternal: ['@reduxjs/toolkit'] },
});
