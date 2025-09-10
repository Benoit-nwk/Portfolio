<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="noway">
        <h2>404 ERROR!</h2>
        <p>this page does not exist, please go back to main page</p>
        <router-link to="/">Go back</router-link>
    </section>
</template>

<style scoped>
</style>
