<template>
    <h1>文本插值表达式 两个花括号</h1>
    <h3>读取到的内容为{{ message }}</h3>

    <h1>读取的内容有html标签，需要使用v-html</h1>
    <p v-html="htmlMessage"></p>

    <h1>文本插值表达式能够支持运算，如a+b</h1>
    <h3>a+b的值为{{ a+b }}</h3>
    
    <h1>v-bind完成数据的绑定</h1>
    <!-- 使用语法糖简化 -->
    <a :href="aurl">点击跳转</a>
    <a :href="aurl"> <img :src="imgurl" alt="" width="100" height="100"> </a>
</template>

<script setup>
const message = "hello world"
const htmlMessage = '<h3 style="color:red" > hello world </h3>'
const a = 1
const b = 2
const aurl = "https://www.baidu.com"
const imgurl = "//img30.360buyimg.com/imgzone/jfs/t1/165688/37/46506/81593/67177817F29055a35/1870631a8b8fc8b8.jpg"
</script>

<style lang="scss" scoped>

</style>