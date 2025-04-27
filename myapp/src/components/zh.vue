<!-- 组合式api -->
<template>
    <h2>组合式api</h2>
    <li v-for="item in arr">{{ item }}</li>
    <!-- 组合式api的相应更新 -->
    <h5>当前count数{{ count }}</h5>
    <button @click="count++">咖啡不断加加加加到厌倦</button>

    


</template>

<script setup>
import { ref } from 'vue'
// ref用于单个数据的响应式，而reactive用于对象的响应式
const arr = ["春天", "夏天", "秋天", "冬天"]

const count = ref(0)
</script>

<style scoped>
</style>