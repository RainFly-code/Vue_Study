import { createApp } from 'vue'
//vue中的主文件，所有vue的出口
import App from './App.vue'
import router from './router'
//创建vue实例，并挂在到id为app的元素上
// 1. 引入你需要的组件
import vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
const app = createApp(App)
app.use(vant);
//挂载路由
app.use(router)
//挂载到id为app的元素上
app.mount('#app')