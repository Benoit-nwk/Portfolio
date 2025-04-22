<script setup>
</script>

<template>
    <div class="container">
        <div class="text">
            <p>Développeur web</p>
            <h1>Benoît Nowak</h1>
            <p>Réalisation de sites web responsives</p>
        </div>
        <img class="elipse" src="./icons/Ellipse.png" alt="elipse">
    </div>
</template>

<style scoped>
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.elipse {
    position: absolute;
    animation: rotate 10s linear infinite;
    transform-origin: center;
    z-index: 1;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;
}
</style>