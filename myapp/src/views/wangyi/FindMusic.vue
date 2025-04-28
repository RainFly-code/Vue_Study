<template>
    <div class="menu1">
        <RouterLink to='/findMusic/recommend'>推荐</RouterLink>
        <RouterLink to='/findMusic/rank'>排行榜</RouterLink>
        <RouterLink to='/findMusic/playlist'>歌单</RouterLink>
        <RouterLink to='/findMusic/singer'>歌手</RouterLink>
        <RouterLink to='/findMusic/album'>新碟上线</RouterLink>
    </div>
    <RouterView></RouterView>
</template>

<script setup>

</script>

<style scoped>
.menu1{
    background-color: #C20C0C;
    padding: 6px;
    display: flex;
    justify-content: center;
    a{
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        margin: 0 25px;
    }
}
a{
    text-decoration: none;
    color: #fff;
}
</style>