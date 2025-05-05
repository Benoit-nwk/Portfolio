<script setup>
import Projects from '@/Data/Projects.json';
</script>

<template>
<section class="project-container">
  <article v-for="project in Projects" class="project-card">
    <img :src="project.image" alt="project image"/>
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
    <a :href="project.repository" title="github du projet">Page Github du projet</a>
  </article>
</section>
</template>

<style scoped>
.project-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}
.project-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: f600px;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px var(--primary-color);
    transition: transform 0.3s ease-in-out;
}

.project-card:hover{
    transform: scale(1.05);
    box-shadow: 0 8px 16px var(--primary-color);
}
</style>
