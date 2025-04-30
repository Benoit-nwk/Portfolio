<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Contact from '@/components/Contact.vue';
</script>

<template>
<NavigationBar />
<h1>Contactez-moi!</h1>
<section>
  <p>Vous pouvez m’envoyer un mail ou m’appeler directement en cliquant sur le bouton correspondant: </p>
  <Contact />
  <p>Je suis disponible du Lundi au Vendredi de 09h00 à 17h00</p>
    <div class="loader-container">
      <p>Le formulaire de contact arrive bientôt!</p>
    <div class="loader"></div>
  </div>
</section>

</template>

<style scoped>

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
}

.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: loading 1s steps(4) infinite;
}
.loader:before {
  content:"Loading..."
}
@keyframes loading {to{clip-path: inset(0 -1ch 0 0)}}
</style>
