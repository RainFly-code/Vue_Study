<!-- 选项式api -->
<template>
    <ul v-for = "item in arr">{{ item }}</ul>
    <!-- 响应式更新 -->
    <h5>当前count数{{ count }}</h5>
    <button @click="count++">咖啡不断加加加加到厌倦</button>
</template>
<!-- 选项式api没有setup -->
<script>
// 有个导出的对象，里面有data、methods、computed等属性
export default {
    data(){
        return {
            arr : ["春天", "夏天", "秋天", "冬天"],
            count : 0
        }
    }
}
</script>

<style lang="scss" scoped>

</style>