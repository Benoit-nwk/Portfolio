<script setup>
import NavBar_head from "@/components/navbar/NavBar_head.vue";
import Fin from "@/components/footer/Fin.vue";
</script>

<template>
<NavBar_head />
<h1>404</h1>
<p>Oups ... La page demandée n'a pas été trouvée.</p>

<div>
<img src="../components/images/404_cat.webp" alt="chat_sous_un_tas_de_papier_404">
</div>
<Fin/>
</template>

<style scoped>
div{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
}

h1{
      color: var(--green);
}

img{
      width: 50%;
      height: 50%;
      border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      border: 0.2rem solid var(--green);
}
</style>
