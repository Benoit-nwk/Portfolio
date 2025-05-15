<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import emailjs from '@emailjs/browser';
import { ref } from 'vue';
const form = ref(null);

const emailGmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const sendEmail = () =>{

  if(!form.value.email.value.match(emailGmailRegex)) {
    alert('Seule les adresses gmail sont acceptées');
  }else
  emailjs.sendForm('service_43lys3m','template_4ofgode', form.value,{
    publicKey: '5zePHXQ2ARQUKU8ny'
  })
  .then(
    ()=>{
      alert('Votre message a bien été envoyé');
    },
    (error)=>{
      alert('Une erreur est survenue, veuillez réessayer' + error);
    }
  )
}
</script>

<template>
<NavigationBar />
<h1>Contactez-moi!</h1>
<section>
  <p>Vous pouvez remplir ce formulaire de contact:</p>
  <form ref="form" @submit.prevent="sendEmail">

    <label for="title">Objet:</label>
    <input type="text" id="title" name="title" required placeholder="Ex: Demande de devis">

    <label for="email">Votre adresse mail: (gmail)</label>
    <input type="email" id="email" name="email" required placeholder="Ex: john.doe@mail.com">

    <label for="name">Votre nom:</label>
    <input type="text" id="name" name="name" required placeholder="Ex: John Doe">
    <label for="message">Message:</label>
    <textarea id="message" name="message" required ></textarea>

    <button class="button" type="submit">Envoyer</button>

  </form>
  <p>Je reste à disposition du Lundi au Vendredi de 9h00 à 18h00</p>
  
</section>

</template>

<style scoped>

</style>
