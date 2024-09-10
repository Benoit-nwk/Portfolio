<script setup>
import NavBar_head from "@/components/navbar/NavBar_head.vue";
import OpenToWork from "@/components/openToWork/OpenToWork.vue";
import Bonjour from "@/components/paragraphes/Bonjour.vue";
import MesProjets from "@/components/boutons/MesProjets.vue";
import NavBar_foot from "@/components/navbar/NavBar_foot.vue";
import Fin from "@/components/footer/Fin.vue";
</script>

<template>

    <header>
        <NavBar_head></NavBar_head>
    </header>

    <main>
        <OpenToWork></OpenToWork>
<div class="grille_pour_desktop">

    <img src="../components/images/photo_de_profil.webp" alt="photo_de_profil">

        <Bonjour></Bonjour>

    </div>
        <MesProjets></MesProjets>
    </main>

    <footer>
        <Fin></Fin>
        <NavBar_foot></NavBar_foot>
    </footer>
    
</template>

<style scoped>

.grille_pour_desktop {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

img{
    width: 80%;
   
}

@media screen and (min-width: 1024px) {
    .grille_pour_desktop {
        margin: 8rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        margin-right: 10rem;

        img{
            width: 60%;
        }

}
}
</style>
