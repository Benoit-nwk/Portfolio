<script setup>
import router from '@/router';



const home = () => {
        router.push('/');
}

const aPropos = () => {
        router.push('/a-propos');
}

const contact = () => {
        router.push('/contact');
}

const projets = () => {
        router.push('/projets');
}
</script>

<template>
<nav>
        <button @click="home"><img src="../icones/accueil.svg" alt="accueil_icone"></button>
        <button @click="aPropos"><img src="../icones/a-propos.svg" alt="a-propos_icone"></button>
        <button @click="projets"><img src="../icones/projets.svg" alt="projets_icone"></button>
        <button @click="contact"><img src="../icones/contact.svg" alt="contact_icone"></button>
        
</nav>
</template>

<style scoped>

nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

img{
        width: 2rem;
        height: 2rem;
}

button{
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 2rem;
}

/* IL FAUT AJUSTER LES COULEURS EN FONCTION DE LA PAGE SUR LAQUELLE ON SE TROUVE (LOGO BLANC FOND VERT) */
button:active{
        background-color: var(--green);
}


@media screen and (min-width: 1024px){

nav{
        display: none;
}

}
</style>