import { createApp } from 'vue'
//vue中的主文件，所有vue的出口
import App from './App.vue'
import router from './router'
//创建vue实例，并挂在到id为app的元素上

const app = createApp(App)
//挂载路由
app.use(router)
//挂载到id为app的元素上
app.mount('#app')