<script setup>

const sendMail = () => {
        window.location.href = "mailto:bntnowak@outlook.com"
}

const call = () => {
        window.location.href = "tel:0658992189"
}

</script>

<template>
<div>
        <section>
                <h2>Par téléphone</h2>
                <p>Au: <span>06.58.99.21.89</span></p>
                <p>Ou en cliquant sur ce bouton:</p>
                <button @click="call">Apeller</button>
        </section>
        <section>
                <h2>Par mail</h2>
                <p>A l'adresse: <span>bntnowak@outlook.com</span></p>
                <p>Ou en cliquant sur ce bouton:</p>
                <button @click="sendMail">Contacter par mail</button>
        </section>
</div>
</template>

<style scoped>
span{
        font-weight: bold;
}

@media screen and (min-width: 1024px) {
        div{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
        }
}
</style>