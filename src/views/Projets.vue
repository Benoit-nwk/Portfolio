<script setup>
import NavBar_head from "@/components/navbar/NavBar_head.vue";
import NavBar_foot from "@/components/navbar/NavBar_foot.vue";
import SectionProjets from "@/components/projets/SectionProjets.vue";
import SectionApprentissage from "@/components/projets/SectionApprentissage.vue";
import Fin from "@/components/footer/Fin.vue";
</script>

<template>
      <header>
            <NavBar_head></NavBar_head>
      </header>

      <main>
            <SectionProjets></SectionProjets>
            <SectionApprentissage></SectionApprentissage>
      </main>

      <footer>
            <Fin></Fin>
            <NavBar_foot></NavBar_foot>
      </footer>
</template>

<style scoped>
</style>