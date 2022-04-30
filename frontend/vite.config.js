import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/',
  css: {
    // css前處理器
    preprocessorOptions: {
      scss: {
        charset: false,
        //需要在assets下建立對應的檔案global.scss
        additionalData: '@import "./src/style/main.scss";',
      },
    },
  }
})