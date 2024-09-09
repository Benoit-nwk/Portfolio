<script setup>
import RetourHautDePage from '../boutons/RetourHautDePage.vue';
</script>

<template>
    <section>
        <RetourHautDePage></RetourHautDePage>
        <p>Retrouvez moi sur les réseaux:</p>

        <div class="reseaux">
            <a href="https://github.com/Benoit-nwk"><img src="../icones/github_W.svg" alt="Git"></a>
            <a href="https://www.linkedin.com/in/benoit-nowak-685933289/"><img src="../icones/linkedin_W.svg" alt="Linkedin"></a>
        </div>

        <p>©️Copyright 2024 - Touts droits réservés - Nowak Benoît</p>
    </section>
</template>

<style scoped>
section{
    margin-top: 5rem;
    background-color: var(--textColor);
    color: var(--bgColor);
    margin-bottom: 5rem;
}

a{
    color: var(--bgColor);
    margin: 0 1rem;
}

@media screen and (min-width: 1024px){
    section{
        margin-bottom: 0;
    }

img{
    transition: all 0.3s ease;
}

    img:hover{
        transform: scale(1.1);
    }
    
}
</style>