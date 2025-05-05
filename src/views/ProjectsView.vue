<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Projects from '@/components/Projects.vue';
</script>

<template>
    <NavigationBar />
    <h1>Mes projets</h1>
    <a href="https://github.com/Benoit-nwk" target="_blank" title="Mon Github"><img src="/public/otherProjects.png" alt="other projects" class="other-projects" /></a>
    <p>Voici quelques projets sur lesquels j'ai travaillé.</p>
    <Projects />
    <a href="https://github.com/Benoit-nwk" class="other-projects-phone">Mes autres projets</a>
</template>

<style scoped>
@keyframes scale {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.other-projects{
    position: absolute;
    right: 100px;
    top: 100px;
    animation: scale infinite 2s ease-in-out;
}
</style>