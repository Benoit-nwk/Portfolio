<script setup>
import NavBar_head from "@/components/navbar/NavBar_head.vue";
import NavBar_foot from "@/components/navbar/NavBar_foot.vue";
import Fin from "@/components/footer/Fin.vue";
import Biographie from "@/components/paragraphes/Biographie.vue";
import Skills from "@/components/carousel/Skills.vue";
import CV_section from "@/components/contact/CV_section.vue";
import MesProjets from "@/components/boutons/MesProjets.vue";
</script>

<template>
      <header>
            <NavBar_head></NavBar_head>
      </header>

      <main>
            <h1>A propos</h1>

            <!---->
            <div class="container">
            <div class="image">
                  <img src="../components/images/photo_a-propos.webp" alt="photo_a-propos">
            </div>


            <div class="bio">
            <Biographie></Biographie>
            </div>
      </div>
            <MesProjets></MesProjets>
            <Skills></Skills>


            <CV_section></CV_section>
      </main>

      <footer>
            <NavBar_foot></NavBar_foot>
            <Fin></Fin>
      </footer>
</template>

<style scoped>

img{
    width: 60%;
   
}
@media screen and (min-width: 1024px) {
      
.container {
      margin: 8rem 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
}

img{
      width: 60%;
}

}

</style>