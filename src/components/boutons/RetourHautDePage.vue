<script setup>
const retourHautDePage = () =>{window.scrollTo(0, 0);}
</script>

<template>
    <div>
        <img src="../logos/logo_benoit_BW.webp" alt="logo_portfolio_benoit_noir_et_blanc">
        <button @click="retourHautDePage">↑</button>
    </div>
</template>

<style scoped>

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

button{
    margin: 1rem;
    width: 3rem;
    height: 3rem;
    color: var(--bgColor);
    background-color: var(--textColor);
    border: 0.1rem solid var(--bgColor);
    font-size: 2rem;
}

img{
    margin: 1rem;
    height: 2.25rem;
}
</style>