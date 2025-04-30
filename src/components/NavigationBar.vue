<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <router-link to="/" title="Page d'accueil">Accueil</router-link>
        <router-link to="/about" title="A propos">A propos</router-link>
        <router-link to="/" title="Page d'accueil"><img class="return_to_home" src="./icons/IconPortfolio.png" alt="Logo-protfolio"></router-link>
        <router-link to="/projects" title="Mes projets">Mes projets</router-link>
        <router-link to="/contact" title="Contactez-moi!">Contact</router-link>
    </nav>
</template>

<style scoped>

.return_to_home{
    transition: all 0.3s ease-in-out;
}
.return_to_home:hover{
    transform: scale(1.1);

}
</style>
