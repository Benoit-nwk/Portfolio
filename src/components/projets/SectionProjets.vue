<script setup>
import projetsPro from '../projets/projetsPro.json';
import { ref } from 'vue';
const projetsData = ref(projetsPro);
</script>

<template>
      <h1>Mes Réalisations</h1>
      <section>
            <div class="card" v-for="projet in projetsData" :key="projet.id">
                  <div class="titre">
                        <h2>{{ projet.titre }}</h2>
                  </div>
                  <div class="content">
                  <img v-if="projet.image" class="imgProjet" :src=projet.image :alt=projet.titre>
                  <h4>Description:</h4>
                  <p>{{ projet.description }}</p>
                  <h4>Frameworks:</h4>
                  <p>{{ projet.frameworks }}</p>
                  <h4>Langages:</h4>
                  <p>{{ projet.langages }}</p>
                  <h4 v-show="projet.technologies">Technologies:</h4>
                  <p v-show="projet.technologies">{{ projet.technologies }}</p>
                  <h4>Liens:</h4>
                  <a :href="projet.git"><img src="../icones/github.svg" alt="lienGithub"></a>
            </div>
            </div>
      </section>

      <footer>
            <Fin></Fin>
            <NavBar_foot></NavBar_foot>
      </footer>
</template>

<style scoped>
section{
      padding: 0 1rem;
      margin: 0rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
}

.content {
  flex-grow: 1;
}

.imgProjet{
      width: 100%;
      height: 100%;
      box-shadow: 0 0 0.5rem var(--black);
      border-radius: 1rem;
}
.card{
      border-radius: 1rem;
      margin-top: 2rem;
      padding: 0 1rem;
      width: 100%;
      height: 100%;
      border: 0.2rem solid var(--green);
}

@media screen and (min-width: 768px){
      section{
            margin: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 4rem;
            justify-items: center;
            align-items: center;
      }
      .card{
            margin-top: 0;
            width: 70%;
            height: 100%;
      }

      .imgProjet{
      width: 100%;
      height: fit-content;
      box-shadow: 0 0 0.5rem var(--black);
      border-radius: 1rem;
}

.titre{
      width: 100%;
      margin-bottom: 2rem;
}
      
}
</style>