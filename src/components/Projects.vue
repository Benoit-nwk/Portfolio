<script setup>
import { ref,onMounted, onUnmounted } from 'vue';
import ProjectsData from '@/data/projects.json';

const handleCardClick = (repository) => {
  window.open(repository, '_blank');
  window.focus();
};

const handleMouseMove = (event, card) => {
  const rect = card.getBoundingClientRect();
  const cardX = rect.left + rect.width / 2;
  const cardY = rect.top + rect.height / 2;
  const offsetX = (event.clientX - cardX) / 10;
  const offsetY = (event.clientY - cardY) / 10;

  card.style.transform = `rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
};

const resetTilt = (card) => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
};

onMounted(() => {
  const cards = document.querySelectorAll('.projects__container');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => handleMouseMove(event, card));
    card.addEventListener('mouseleave', () => resetTilt(card));
  });
});

onUnmounted(() => {
  const cards = document.querySelectorAll('.projects__container');
  cards.forEach((card) => {
    card.removeEventListener('mousemove', (event) => handleMouseMove(event, card));
    card.removeEventListener('mouseleave', () => resetTilt(card));
  });
});

</script>

<template>
<section class="projects">
    <div v-for="project in ProjectsData" class="projects__container" @click="handleCardClick(project.repository)">
        <img :src="project.image" alt="project-image">
        <hr>
        <h2>{{ project.name }}</h2>
        <p>#{{ project.id }}</p>
    </div>
</section>

</template>

<style scoped>
.projects{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
}

.projects__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 400px;
    margin-bottom: 2rem;
    border: 0.3rem solid var(--primary-color);
    border-radius: 1rem;
    transition: scale 0.3s ease-in-out;
    >hr{
        width: 30%;
        height: 3px;
        background-color: var(--text-color);
        border: none;
        margin: 2rem 0;
    }
}

.projects__container:hover {
    scale: 1.05;
    box-shadow: 0 15px 30px rgba(105, 105, 105, 0.622);
    cursor: pointer;
}

</style>