<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import NameAndJob from '@/components/NameAndJob.vue';
import JavascriptClock from '@/components/JavascriptClock.vue';
</script>

<template>
<NavigationBar />
    <section class="home">
        <JavascriptClock />
        <NameAndJob />
    </section>
</template>

<style scoped>
</style>
