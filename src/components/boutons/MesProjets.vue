<script setup>
import router from '@/router';

</script>

<template>
    <div>
        <button @click="router.push('/projets')">Mes projets</button>
    </div>
</template>

<style scoped>
div{
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 1024px) {
    div{
        display: none;
    }
    
}
</style>