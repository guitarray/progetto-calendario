import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,         // abilita test() e expect() globali
    environment: 'jsdom',  // simula il DOM
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'], // genera report testuali e HTML
      all: true,
    },
  },
})
