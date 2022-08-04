import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  build: {
    emptyOutDir: true,
    assetsDir: 'game-center',
    rollupOptions: {
      output: {
        chunkFileNames: 'game-center/static/js/[name]-[hash].js',
        entryFileNames: 'game-center/static/js/[name]-[hash].js',
        assetFileNames: 'game-center/static/css/[name]-[hash].[ext]'
      }
    }
  }
})
