<script setup>
const linkedin = "https://www.linkedin.com/in/benoit-nowak-685933289";

</script>

<template>
    <div class="otw">
<div class="pastille"></div>
<a :href=linkedin>Open to work</a>
</div>
</template>

<style scoped>


@keyframes fade {
    0%, 100% {
        opacity: 1;
        scale: 1.1;
    }
    50% {
        opacity: 0.5;
        scale: 0.8;
    }
}


.otw{
    display: flex;
    margin: 2rem 0 2rem 0;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
}
.pastille{
    width: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
    background-color: var(--green);
    border-radius: 1rem;
    animation: fade 1.5s infinite ease-in-out;
}

a{
    text-decoration: underline;
    color: var(--black);
}
</style>