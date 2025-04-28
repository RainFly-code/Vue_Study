<template>
   <!-- <div>获取meta内容{{ $router }}</div> -->
   
   <!-- 加入vue的路由访问链接 -->
    <!-- <div class="menu">
      <div class="menu-container">
        <img src="./assets/logo.png" alt="网站Logo" class="logo" />
        <div class="nav-links">
          <RouterLink to="/findMusic">发现音乐</RouterLink>
          <RouterLink to="/myMusic">我的音乐</RouterLink>
          <RouterLink to="/friend">我的关注</RouterLink>
          <RouterLink to="/musician">音乐人</RouterLink>
        </div>
      </div>
    </div> -->
    <RouterLink to="/home">首页</RouterLink>
   <!-- 路由的总出口 必填项 哪个页面是父组件，就在哪个vue里面编写出口 -->
   <RouterView></RouterView> 
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<style scoped>
a{
   text-decoration: none;
   color: #fff;
}
.menu{
   background-color: #242424;
   padding: 10px;
}
.menu-container {
   display: flex;
   align-items: center;
   justify-content: center;
   max-width: 1200px;
   margin: 0 auto;
}
.logo {
   width: 135px;
   height: 40px;
   margin-right: 20px;
}
.nav-links {
   display: flex;
   align-items: center;
}
.nav-links a {
   color: #fff;
   font-size: 16px;
   font-weight: 500;
   margin: 0 20px;
}
</style>
