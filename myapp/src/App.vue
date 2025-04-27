<template>
   <!-- 加入vue的路由访问链接 -->
   <RouterLink to="/">首页</RouterLink><br>
   <RouterLink to="/moveShop">移动端首页</RouterLink>
   <!-- 路由的总出口 必填项 哪个页面是父组件，就在哪个vue里面编写出口 -->
   <RouterView></RouterView> 
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<style scoped>

</style>
