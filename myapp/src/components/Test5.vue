<template>
    <!-- v-if和v-show练习 -->
    <div v-if="isShow">v-if显示</div>
    <div v-show="isShow">v-show显示</div>
    <div></div>
    
    <div v-if="age > 18">成年</div>
    <div v-else-if="age == 18">刚成年</div>
    <div v-else>未成年</div>

    <!-- v-for练习 -->
     <!-- 让谁循环生成，v-for就写在哪 -->
     <hr>
     <h1>v-for练习学生信息管理系统</h1>
     <div>
        <span>学生信息：</span>
        <li v-for="item in stu" :key="index"> {{item}} </li>
        <span>学生详细信息</span>
        <ul>
            <li v-for = "item in stuarr">
                <span>姓名：{{item.name}}</span>
                <span>年龄：{{item.age}}</span>
                <span>爱好：{{item.hobby}}</span>
            </li>
        </ul>
     </div>
     
     <!-- v-forx循环对象 -->
     <!-- 为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，
      从而重用和重新排序现有的元素，你需要为每个元素对应的块
      提供一个唯一的 key attribute -->

     <span>教师信息</span>
     <div v-for = "(value,key,index) in teaObj">
        {{ index }}--{{key}}--{{value}}
    </div>
</template>

<script setup>

import { reactive, ref } from 'vue'

const isShow = ref(true)
const age = ref(19)

const stu = ref(['张三', '李四', '王五'])

const stuarr = ref([
    { name: '张三', age: 18 , hobby:'打篮球' },
    { name: '李四', age: 19 , hobby:'打篮球'},
    { name: '王五', age: 20 , hobby:'打篮球'},
])

const teaObj = reactive({
    name: '张老师',
    age: 30,
    hobby: '打篮球'
})

</script>

<style scoped>

</style>