<script setup>
const openCV=()=> {
    window.open('/documents/CV_Nowak_Benoit.pdf', '_blank');
}
</script>

<template>
    <h1>A propos</h1>
    <section class="bento">
        <article>
            <img src="/icons/profile_image.png" alt="profile_image" class="image_bento">
            <aside>
            <h2>Qui suis-je?</h2>
            <p>Je suis un développeur web passionné par la création de sites et d'applications web. J'aime relever des défis techniques et trouver des solutions innovantes pour répondre aux besoins des clients.</p>   
            </aside>
        </article>
        <article>
            <aside>
            <h2>Mon expérience</h2>
            <p>J'ai travaillé sur divers projets, allant de la création de sites vitrines à des applications web complexes. J'ai acquis une solide expérience dans le développement front-end et back-end.</p>
            </aside>
            <img src="/icons/experience_image.png" alt="exp_image" class="image_bento">
        </article>
        <article>
            <img src="/icons/skills_image.png" alt="skills_image" class="image_bento">
            <aside>
            <h2>Mes compétences</h2>
            <p>Je maîtrise plusieurs langages de programmation et frameworks, notamment HTML, CSS, JavaScript, Vue.js, PHP et bien d'autres. Je suis toujours en quête d'apprentissage pour rester à jour avec les dernières technologies.</p>
            </aside>
        </article>
        <button class="button" @click="openCV">Télécharger mon cv</button>
    </section>
</template>

<style scoped>
.image_bento {
    width: 200px;
    height: 200px;
}

.bento{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
}

article {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: start;
    border: 0.2rem solid var(--primary-color);
    border-radius: 1rem;
    padding : 2rem;
}

aside{
    width: 50%;
    padding: 2rem;
    >p{
        text-align: start;
    }
}
</style>
