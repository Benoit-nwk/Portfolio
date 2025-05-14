<script setup>

</script>

<template>
    <h1>A propos</h1>
    <section class="about-container">
        <article>
            <h2>Qui suis-je ?</h2>
            <p>Je suis un développeur web passionné par la création de sites et d'applications web. J'aime relever des défis techniques et trouver des solutions innovantes pour répondre aux besoins de mes clients.</p>
            <a href="/contact" title="contactez-moi!">Contactez-moi!</a>
        </article>
        <article>
            <h2>Mon parcours</h2>
            <p>Pendant le cursus de développeur web et web mobile, j'ai travaillé sur divers projets, allant de la création de sites vitrines à des applications web complexes intégrant des API. J'ai acquis une solide expérience dans le développement front-end et back-end. </p>
            <a href="/public/documents/CV_Nowak_Benoit.pdf" title="télécharger le cv">Télécharger mon CV</a>
        </article>
        <article>
            <h2>Mes compétences</h2>
            <p>Je maîtrise plusieurs langages de programmation et frameworks, notamment HTML, CSS, JavaScript, PHP, Vue.js, React.js et Laravel. Je suis également à l'aise avec les bases de données SQL et NoSQL.</p>
        </article>
        <article>
            <h2>Mes projets</h2>
            <p>J'ai réalisé différentes applications web telles qu'un site vitrine pour un salon de coiffure mais aussi une reproduction de l'application Yuka. Je suis en train de travailler sur un jeu type web app.</p>
            <a href="/projects" title="Mes projets">Voir mes projets</a>
        </article>
            </section>
</template>

<style scoped>
.about-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem;
    padding: 2rem;
}

article{
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: none;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-shadow: 0 4px 8px var(--primary-color);
    >p{
        text-align: start;
        margin: 0;
        line-height: 1.9rem;
    }
    >a{
        text-decoration: none;
        color: var(--primary-color);
        font-weight: bold;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background-color: var(--secondary-color);
        transition: all 0.3s ease-in-out;
    }
}

article:hover{
    box-shadow: 0 8px 16px var(--primary-color);
    scale: 1.02;
}

</style>
