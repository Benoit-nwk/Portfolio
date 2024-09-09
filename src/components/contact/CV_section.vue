<script setup>
const downloadPdf = () => {
      const pdf = "./public/pdf/CV_Nowak_Benoit.pdf";
      window.open(pdf);
}
</script>

<template>

<section>
      <h3>Curriculum Vitae</h3>
      <p>Disponible en cliquant sur ce bouton:</p>
      <img src="../images/fleches.webp" alt="fleches">
      <button @click="downloadPdf">Télécharger le CV</button>
</section>

</template>

<style scoped>
img{
      margin: 1rem;
}
</style>
