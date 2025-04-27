<template>
    <!-- v-for更新测试 -->
    <div>
        <ul>
            <li v-for="(val,index) in arr" :key = "index">
                {{ val }}
            </li>
            <button @click="recBtn">数组翻转</button>
            <button @click="slicBtn">截取前三个</button>
            <button0 @click="updateBtn">更新第一个元素值</button0>
            <button @click="fliterUp">过滤条件数组</button>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const arr = ref([1,2,3,4,5,6,7,8,9])
const arr2 = ref([2,5,6,7])

const recBtn = () => {
    arr.value.reverse()
}
const slicBtn = () => {
    arr.value = arr.value.slice(0,3)
}
const updateBtn = () => {
    arr.value[0] = 100
}
const fliterUp = () => {
    arr.value = arr.value.filter((item) => {
        return item > 5
    })
}
</script>

<style lang="scss" scoped>

</style>