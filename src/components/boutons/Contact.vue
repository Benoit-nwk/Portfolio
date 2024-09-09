<script setup>
import router from '@/router';

</script>

<template>
<button @click="router.push('/contact')">Contact</button>
</template>

<style scoped>
button{
    background: none;
    border: 0.2rem solid var(--green);
    border-radius: 1rem;
    font-size: 1.5rem;
    width: 9rem;
    height: 2.5rem;
}

button:active{
    background-color: var(--green);
    color: var(--bgColor);
}
</style>