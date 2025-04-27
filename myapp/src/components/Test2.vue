<template>
    v-on的使用格式为@事件名="方法名"或v-on:事件名="方法名"
    <h1>事件绑定</h1>
    <h2>当前count数量</h2>
    <h3>{{ count }}</h3>
    <button @click="add">增加count数量,点击加加</button>
    <button @click="addNumber(5)">每次增加5个</button>

    <!-- 使用v-bind改变id选择器的属性 -->
    <p :id="id">v-bind当前绑定的id样式</p>
    <button @click="id='d2'">点击改变样式</button>
    <!-- 使用函数改变 -->
    <button @click="changeId">点击改变样式</button>

    <!-- v-on的事件修饰符 -->
     <!-- 1.prevent修饰符：阻止默认事件 -->
     <!-- 两种都可以使用 -->
    <br>
    <h1>prevent修饰符</h1>
    <a href="http://www.baidu.com" @click.prevent="evectProcess">点击跳转</a><br>
    <a href="http://www.baidu.com" @click="evectProcess">点击跳转</a>
    <!-- 2.stop修饰符：阻止事件冒泡 -->
     <br>
     <hr>
     

     <h1>stop修饰符和once修饰符</h1>

     <div @click="fatherClick">
        <a href="http://www.baidu.com" @click.prevent="evectProcess">点击跳转</a><br>
        <button @click.stop="childClick">stop子组件点击</button>
        <button @click.once="childClick">once子组件点击</button>
     </div>


</template>

<script>
export default {
    data() {
        return {
            count: 0,
            id: 'd1'
        }
    },
    methods: {
        add() {
            this.count++
        },
        addNumber(num) {
            this.count += num
        },
        changeId(){
            this.id == 'd1' ? this.id = 'd2' : this.id = 'd1'
        },
        evectProcess(event) {
            // 阻止默认事件
            event.preventDefault()
            console.log('阻止默认事件')
        },
        fatherClick() {
            console.log('父组件点击')
        },
        childClick() {
            console.log('子组件点击')
        }
    }
}
</script>

<style scoped>
#d1{
    color:red;
    font-size: 20px;
}
#d2{
    color:blue;
    font-size: 20px;
}
</style>