<template>
    <p>求a和b的和={{ num }}</p>
</template>
 
<script setup>
import { ref, computed } from 'vue'
const a = ref(1)
const b = ref(2)
const num = computed(() => {
    return a.value + b.value
})
</script>

<style scoped>

</style>