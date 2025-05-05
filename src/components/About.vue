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
            <p>Après avoir obtenu mon diplôme en informatique, j'ai travaillé sur divers projets, allant de la création de sites vitrines à des applications web complexes intégrant des API. J'ai acquis une solide expérience dans le développement front-end et back-end. </p>
        </article>
        <article>
            <h2>Mes compétences</h2>
            <p>Je maîtrise plusieurs langages de programmation et frameworks, notamment HTML, CSS, JavaScript, PHP, Vue.js, React.js et Laravel. Je suis également à l'aise avec les bases de données SQL et NoSQL.</p>
        </article>
        <article>
            <h2>Mes projets</h2>
            <p>J'ai travaillé sur de nombreux projets, allant de la création de sites vitrines à des applications web complexes intégrant des API.</p>
            <aside><a href="/projects" title="Mes projets">Voir mes projets</a></aside>
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
    padding: 1rem;
    border-radius: 8px;
    box-shadow: none;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 8px var(--primary-color);
    >p{
        text-align: start;
        line-height: 1.5;
    }
}

article:hover{
    box-shadow: 0 8px 16px var(--primary-color);
    scale: 1.02;
}

</style>
