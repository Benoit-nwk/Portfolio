<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const parallaxImages = ref([]);

const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    parallaxImages.value.forEach((img, index) => {
    const depth = index * 0.005 + 0.01;
    const offsetX = (clientX - centerX) * depth;
    const offsetY = (clientY - centerY) * depth;

    img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
};

onMounted(() => {
    parallaxImages.value = Array.from(document.querySelectorAll('.parallax-image'));
    window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
<div class="parallax-container">
    <img class="parallax-image" src="../../public/icons/git.svg" alt="logo-git" id="git"/>
    <img class="parallax-image" src="../../public/icons/html-5.svg" alt="logo-html" id="html"/>
    <img class="parallax-image" src="../../public/icons/css.svg" alt="logo-css" id="css"/>
    <img class="parallax-image" src="../../public/icons/vue.svg" alt="logo-vue" id="vue"/>
    <img class="parallax-image" src="../../public/icons/laravel.svg" alt="logo-laravel" id="laravel" />
    <img class="parallax-image" src="../../public/icons/php.svg" alt="logo-php" id="php"/>
    <img class="parallax-image" src="../../public/icons/mysql.svg" alt="logo-mysql" id="mysql"/>
    <img class="parallax-image" src="../../public/icons/figma.svg" alt="logo-figma" id="figma"/>
    <img class="parallax-image" src="../../public/icons/js.svg" alt="logo-illustrator" id="js"/>
    <img class="parallax-image" src="../../public/icons/csharp.svg" alt="logo-csharp" id="csharp"/>
    <img class="parallax-image" src="../../public/icons/mongodb.svg" alt="logo-mongodb" id="mongodb"/>
    <img class="parallax-image" src="../../public/icons/typescript.svg" alt="logo-typescript" id="typescript"/>
    <img class="parallax-image" src="../../public/icons/react.svg" alt="logo-react" id="react"/>
</div>
</template>

<style scoped>
.parallax-container {
    position: relative;
    width: 100%;
    height: 70vh;

}

.parallax-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
    will-change: transform;
}

#git {
    position: absolute;
    top: 20%;
    left: 10%;
}

#html {
    position: absolute;
    top: 30%;
    left: 80%;
}

#css {
    position: absolute;
    top: 10%;
    left: 40%;
}

#vue {
    position: absolute;
    top: 20%;
    left: 60%;
}

#laravel {
    position: absolute;
    top: 60%;
    left: 70%;
}

#php {
    position: absolute;
    top: 50%;
    left: 55%;
}

#mysql {
    position: absolute;
    top: 45%;
    left: 35%;
}

#figma {
    position: absolute;
    top: 90%;
    left: 85%;
}

#js {
    position: absolute;
    top: 80%;
    left: 45%;
}

#csharp {
    position: absolute;
    top: 70%;
    left: 30%;
}

#mongodb {
    position: absolute;
    top: 57%;
    left: 17%;
}

#typescript {
    position: absolute;
    top: 77%;
    left: 5%;
}

#react {
    position: absolute;
    top: 5%;
    left: 25%;
}
</style>