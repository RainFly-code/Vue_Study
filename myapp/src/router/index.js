// 路由引入方式
// 两种方式
// 1.直接引用
import Home from "../views/Home.vue"
import { createRouter, createWebHashHistory } from "vue-router"
//配置路由规则对象数组
const routes = [
    {
        path:'/',
        name:'home',
        component:Home  //直接引入
    },
    {
        path:'/moveShop',
        name:'moveShop',
        //动态引入
        component:()=>import('../views/MoveShop.vue')
    }
]

//创建路由实例
const router = createRouter({
    //使用hash模式
    history:createWebHashHistory(),
    routes
})

//导出路由实例,一般都会挂载到main.js
export default router