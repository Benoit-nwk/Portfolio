<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Projects from '@/components/Projects.vue';
</script>

<template>
    <NavigationBar />
    <h1>Mes projets</h1>
    <p>Voici quelques projets sur lesquels j'ai travaillé.</p>
    <Projects />
    <section class="github">
        <p>Et encore d’autres disponibles sur mon github:</p>
        <a href="https://github.com/Benoit-nwk"><img src="/public/icons/github.svg" alt="logo-github"></a>
    </section>
</template>

<style scoped>
h1{
    text-align: center;
    margin-top: 4rem;
    font-size: 48px;
}

p{
    text-align: center;
    margin-bottom: 2rem;
}

.github{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    >a{
        transition: scale 0.3s ease-in-out;
    }
    >a:hover{
        scale: 1.2;
    }
}
</style>