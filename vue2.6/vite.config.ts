import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import scriptSetup from 'unplugin-vue2-script-setup/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      jsx: true,
    }),
    scriptSetup(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
