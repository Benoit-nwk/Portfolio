<script setup>
import apprentissage from '../projets/apprentissage.json';
import { ref } from 'vue';
const apprentissageData = ref(apprentissage);
</script>

<template>
                  <h1>En cours d'apprentissage</h1>
      <section>
            <div class="card" v-for="cours in apprentissageData" :key="cours.id">
                  <h2>{{ cours.titre }}</h2>
                  <p>{{ cours.description }}</p>
                  <h4 v-show="cours.git">Liens:</h4>
                  <a :href="cours.git" v-show="cours.git"><img src="../icones/github.svg" alt="lienGithub"></a>
            </div>
      </section>

</template>

<style scoped>

h1{
      margin-top: 5rem;
}

section{
      padding: 0 1rem;
      margin: 2rem;
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

@media screen and (min-width: 1024px){

      h1{
            margin-top: 10rem;
      }

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