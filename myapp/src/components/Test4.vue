<template>
    <h1>双向数据绑定测试</h1>
    <p>姓名{{ username }}</p>
    <input type="text" v-model="username" placeholder="请输入姓名" />
    <p>密码{{ pasawd }}</p>
    <input type="password" v-model="pasawd" placeholder="请输入密码" />
    <div>
        <span>来自于：{{ from }}</span>
        <!-- 下拉菜单要绑定在select上 -->
        <select v-model="from">
            <option value="北京">北京</option>
            <option value="上海">上海</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
        </select>
    </div>
    <div>
        <!-- 复选框，v-model的变量值
        非数组，值为true或false
        数组，值为选中的值组成的数组关联的value -->
        <span>爱好{{ hobby }}</span>
        <input type="checkbox" v-model="hobby" value="篮球" />篮球
        <input type="checkbox" v-model="hobby" value="足球" />足球
        <input type="checkbox" v-model="hobby" value="乒乓球" />乒乓球
        <input type="checkbox" v-model="hobby" value="羽毛球" />羽毛球
    </div>
    <div>
        <span>性别:{{ gender }}</span>
        <input type="radio" v-model = "gender" value="男">男
        <input type="radio" v-model = "gender" value="女">女
    </div>
    <div>
        <span>自我介绍:{{ intro }}</span>
        <textarea v-model="intro"></textarea>
    </div>
    <!-- v-model修饰符 -->
    <div>
        <span>年龄{{ age }}</span>
        <input type="text" v-model.number="age" placeholder="请输入年龄" />
    </div>
    <div>
        <span>人生格言：{{ motto }}</span>
        <input type="text" v-model.trim="motto" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('张三')
const pasawd = ref('123456')
const from = ref('北京')
const hobby = ref(['篮球'])
const gender = ref('男')
const intro = ref('我爱编程')
const age = ref(18)
const motto = ref('我爱编程')
</script>

<style lang="scss" scoped>

</style>