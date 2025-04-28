// 路由引入方式
// 两种方式
// 1.直接引用
import Home from "../views/Home.vue";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
//配置路由规则对象数组
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "",
    redirect: "/findMusic",
  },
  {
    path: "/moveShop",
    name: "moveShop",
    component: () => import("../views/MoveShop.vue"),
  },
  {
    path: "/findMusic",
    name: "findMusic",
    component: () => import("../views/wangyi/FindMusic.vue"),
    meta: {
      //路由元信息,可以自定义属性
      title: "发现音乐",
    },
    children: [
      {
        path: "",
        redirect: "/findMusic/recommend",
      },
      {
        path: "recommend",
        name: "recommend",
        component: () => import("../views/wangyi/finds/Recommend.vue"),
      },
      {
        path: "rank",
        name: "rank",
        component: () => import("../views/wangyi/finds/Rank.vue"),
      },
      {
        path: "playlist",
        name: "playlist",
        component: () => import("../views/wangyi/finds/Playlist.vue"),
      },
      {
        path: "singer",
        name: "singer",
        component: () => import("../views/wangyi/finds/Singer.vue"),
      },
      {
        path: "album",
        name: "album",
        component: () => import("../views/wangyi/finds/Album.vue"),
      },
    ],
  },
  {
    path: "/friend",
    name: "friend",
    component: () => import("../views/wangyi/Friend.vue"),
    meta: {
      title: "关注",
    },
  },
  {
    path: "/musician",
    name: "musician",
    component: () => import("../views/wangyi/Musician.vue"),
    meta: {
      title: "音乐人",
    },
  },
  {
    path: "/myMusic",
    name: "myMusic",
    component: () => import("../views/wangyi/MyMusic.vue"),
    meta: {
      title: "我的音乐",
    },
  },
  //第一种传参
  // {
  //   path: "/musicdetail/:id",
  //   name: "musicdetail",
  //   component: () => import("../views/wangyi/Musicdetail.vue"),
  //   meta: {
  //     title: "我的音乐",
  //   },
  // },
  {
    path: "/musicdetail",
    name: "musicdetail",
    component: () => import("../views/wangyi/Musicdetail.vue"),
    meta: {
      title: "我的音乐",
    },
  },
];

//创建路由实例
const router = createRouter({
  //使用hash模式
  history: createWebHashHistory(),
  routes,
});

//导出路由实例,一般都会挂载到main.js
export default router;
