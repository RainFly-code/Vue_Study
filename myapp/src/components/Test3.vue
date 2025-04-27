
<template>
    <h1>字符串翻转</h1>
    <h2>{{ str }}</h2>
    <button @click="reverseStr">点击翻转</button>
</template>

<script>
export default {
    data() {
        return {
            str: 'hello world'
        }
    },
    methods: {
        reverseStr() {
            this.str = this.str.split('').reverse().join('')
            console.log(this.str)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>