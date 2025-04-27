import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port:5000,
    open:true,  //自动打开浏览器
    host:'0.0.0.0'  //访问ip
  }
})
