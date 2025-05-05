<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav>
        <section class="side-menu-container">
            <button class="menu" @click="toggleMenu"><img src="/public/menu.svg" alt="menu"/></button>

            <div class="side-menu" :class="{ open: isMenuOpen }">
                <button class="menu-close" @click="toggleMenu"><img src="/public/menu_close.svg" alt="menu"/></button>
                <router-link to="/" title="Page d'accueil" >Accueil</router-link>
                <router-link to="/about" title="A propos" >A propos</router-link>
                <router-link to="/projects" title="Mes projets" >Mes projets</router-link>
                <router-link to="/contact" title="Contactez-moi!">Contact</router-link>
            </div>
        </section>
        

        <router-link to="/" title="Page d'accueil" class="nav-anchor">Accueil</router-link>
        <router-link to="/about" title="A propos" class="nav-anchor">A propos</router-link>
        <router-link to="/" title="Page d'accueil"><img class="return_to_home" src="./icons/IconPortfolio.png" alt="Logo-protfolio"></router-link>
        <router-link to="/projects" title="Mes projets" class="nav-anchor">Mes projets</router-link>
        <router-link to="/contact" title="Contactez-moi!" class="nav-anchor">Contact</router-link>
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
