import { defineConfig } from 'vite'
import honox from 'honox/vite'
import mdx from '@mdx-js/rollup'
export default defineConfig({
  plugins: [
    honox({}),
    mdx({
      jsxImportSource: 'hono/jsx'
    })
  ]
})
