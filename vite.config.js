import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    legacy({
      targets: [
        "> 1%",
        "last 2 versions",
        "not ie <= 11"
      ]
    }),
    createVuePlugin(),
  ],
})
