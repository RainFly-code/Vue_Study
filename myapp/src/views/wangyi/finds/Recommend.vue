<template>
    <div>
      <a href="">华语|</a>&nbsp;
      <a href="">流行|</a>&nbsp;
      <a href="">摇滚|</a>&nbsp;
      <a href="">民谣|</a>&nbsp;
      <a href="">电子</a>
      <hr style="height: 10px;">
      <div @click="handleClick">
        <img src="https://p1.music.126.net/np88MU-d3uL8iP1P0R4Tsw==/109951166685344262.jpg" height="200" width="200">
        <p>【怀疑耳机坏了系列】耳机你对耳朵做了什么</p>
      </div>
    </div>
    <div @click="getlif">
      {{ msg }}
    </div>
    <div>
      <button id="count" @click="count++">
        {{ count }}
      </button>
    </div>
</template>


<script setup>
import { onMounted, onUpdated } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'; //引入ref函数
const router = useRouter();//获取路由对象
const msg = "我是首页"
const count = ref(0); //定义一个响应式数据，使用ref函数
//生命周期钩子函数vue3
onMounted(() => {
  getlif();
  console.log("页面加载完成");
})
//更新钩子函数
onUpdated(() => {
  console.log("页面更新完成");
})
const getlif = () => {
  console.log('点击了');
}

const handleClick = () => {
  console.log('点击了图片 ');
  // 这里可以添加跳转逻辑 
  // router.push("/musicdetail") //可以采用path跳转，也可以采用name跳转
  //第一种传参
  // router.push({name: 'musicdetail', params: { id: 123 }}) //传递路由参数
  //第二种传参
  router.push({ path: '/musicdetail', query: { id: 123 } }) //传递路由参数
}

</script>

<style scoped>

</style>