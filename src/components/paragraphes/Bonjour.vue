<script setup>
</script>

<template>
    <section>
        <span>Bonjour, je m'apelle <span class="green">Benoît Nowak</span> et je suis</span>
        <h1>Développeur web</h1>
        <span>Création de sites web responsives en format desktop mobile et tablette</span>
    </section>
</template>

<style scoped>
.green{
    color: var(--green);
    font-size: large;
}

@media screen and (min-width: 1024px) {
.green{
    font-size: 1.5rem;
}
}
</style>