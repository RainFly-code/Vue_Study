<template>
    <div class="content">
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute(); //获取路由对象,接受路由的参数，路由传递获取参数
//生命周期钩子函数vue3
onMounted(() => {
    // console.log(route.params.id); //获取路由参数id
    console.log(route.query.id); //获取路由参数id
})


</script>

<style scoped>
.content {
    width: 100%;
    height: 600px;
    background: url(../../assets/yyxq.png);
   background-size: 100% 600px;
}
</style>