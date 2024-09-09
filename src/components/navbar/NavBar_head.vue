<script setup>
import router from '@/router';


const goContact = () => {
    router.push('/contact');
}
</script>

<template>
<nav>
    <img src="../logos/logo_benoit.webp" alt="logo_portfolio_benoit">
    <div class="navDesktop">
        <router-link to="/">Accueil</router-link>
        <router-link to="/a-propos">A-Propos</router-link>
        <router-link to="/projets">Mes projets</router-link>
    </div>
    <button @click="goContact">Contact</button>
</nav>
</template>

<style scoped>

nav{
    margin: 0rem 1rem 0 1rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

img{
    height: 2.25rem;
}

.navDesktop{
    display: none;
}

button{
    display: none;
}

@media screen and (min-width: 1024px) {

    nav{
        margin: 1rem 7rem 7rem 7rem;
    }

    .navDesktop{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    button{
        display: block;
    }

    a{
        font-size: 1.2rem;
        text-decoration: none;
        color: var(--black);
    }

    a:hover{
        text-decoration: underline;
    }
}

</style>