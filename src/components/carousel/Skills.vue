<script setup>
const skillsTab = ["VsCode", "PhpStorm", "HTML", "CSS", "JavaScript", "PHP", "Vue.Js", "Laravel", "MySql", "Laragon", "Git", "Figma"]
</script>

<template>
      <!--Ajout ici d'un premier background-->
      
            <!-- Création du carousel-->
      <div class="carousel">
            <div class="carousel-content">
                  <!--Répétition du span grace à l'attribu '-duplicate'-->
                  <span v-for="skills in skillsTab" :key="skills">{{skills}} . </span>
                  <span v-for="skills in skillsTab" :key="skills + '-duplicate'">{{skills}} . </span>
            </div>
      </div>

      <div class="skills">
            <hr>
            <h2>Skills</h2>
            <div class="skillstab">
                  <span v-for="skills in skillsTab">{{skills}}</span>
            </div>
            <hr>
      </div>

</template>

<style scoped>

@keyframes scroll-left {
0% {
      transform: translateX(0);
}
100% {
      transform: translateX(-50%);
}
}

.carousel {
      display: flex;
      align-items: center;
      white-space: nowrap;
      height: 3rem;
      width: 100%;
      overflow: hidden;
      rotate: -2.5deg;
      background-color: var(--green);
      margin-top: 3rem;
}

.carousel-content {
      animation: scroll-left 10s linear infinite;
      font-size: 1.5rem;
      color: var(--bgColor);
}

.skills{
      display: none;
}

@media screen and (min-width: 1024px) {
.carousel{
      display: none;
}

.skills{
      display: block;
}

.skillstab{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      margin-top: 3rem;
}

hr{
      margin: 3rem 0;
      border: 1px solid var(--green);
}
}

</style>
