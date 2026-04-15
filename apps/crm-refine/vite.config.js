import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 5174
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(process.cwd(), "src")
    }
  }
})
