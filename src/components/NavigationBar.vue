<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <router-link to="/about">A propos</router-link>
        <router-link to="/projects">Mes projets</router-link>
        <router-link to="/"><img src="./icons/IconPortfolio.png" alt="Logo-protfolio"></router-link>
        <router-link to="/technologies">Technologies</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<style scoped>

</style>
