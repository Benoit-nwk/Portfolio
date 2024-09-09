<script setup>
import NavBar_head from "@/components/navbar/NavBar_head.vue";
import ContactSection from "@/components/contact/Contact_section.vue";
import NavBar_foot from "@/components/navbar/NavBar_foot.vue";
import Fin from "@/components/footer/Fin.vue";
</script>

<template>
    <header>
        <NavBar_head></NavBar_head>
    </header>

    <main>
        <h1>Contactez moi!</h1>
        <ContactSection></ContactSection>
    </main>

    <footer>
        <Fin></Fin>
        <NavBar_foot></NavBar_foot>
    </footer>
</template>

<style scoped>
</style>