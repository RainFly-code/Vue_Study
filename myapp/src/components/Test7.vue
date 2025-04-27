<template>
    <!-- 动态对class和style绑定 -->

     <!-- class绑定语法  :clasee="{'class1':true,'class2':false}"
     style绑定语法  :style="{color:'red',fontSize:'20px'}" -->

     <span>我的第一个class样式</span>
     <p :class="{str_Red:bool,back_Bg:bool}">动态对class的文本颜色修改</p>
     <!-- class绑定对象类型 ,使用对象类型，需要去掉花括号-->
     <p :class="classObj">class绑定对象类型</p>
     <p :class="{price_Red: price > 100 }">{{ price }}</p>

     <!-- 动态style -->
      <h1>动态style</h1>
      <p :style="{backgroundColor:bgColor}">动态样式</p>
</template>

<script setup>
import { ref } from 'vue'
const price = ref(99)
const bool = ref(true)
const classObj = ref({
    str_Red: true,
    back_Bg: false
})
const bgColor = ref('red')

</script>

<style scoped>
.str_Red {
    color: red;
    font-size: 20px;
}
.price_Red {
    color: red;
    font-size: 20px;
}
.back_Bg {
    background-color: blue;
    color: white;
    font-size: 20px;
}
</style>