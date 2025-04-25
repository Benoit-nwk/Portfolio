<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import ParralaxTechnologies from '@/components/ParralaxTechnologies.vue';
</script>

<template>
<NavigationBar />
<ParralaxTechnologies />
<section class="technologies">
        <h1>Technologies</h1>
        <p>Voici les technologies que j'utilise dans mes projets.</p>
        <table>
            <thead>
                <th>Front-end</th>
                <th>Back-end</th>
                <th>Base de données</th>
                <th>Outils</th>
            </thead>
                <tbody>
                    <tr>
                        <td>HTML</td>
                        <td>PHP</td>
                        <td>MySQL</td>
                        <td>Git</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Laravel</td>
                        <td>MongoDB</td>
                        <td>Figma</td>
                    </tr>
                    <tr>
                        <td>JavaScript / Typescript</td>
                        <td>C#</td>
                        <td>--</td>
                        <td>Docker</td>
                    </tr>
                    <tr>
                        <td>Vue.js</td>
                        <td>Express.js</td>
                        <td>--</td>
                        <td>VS Code</td>
                    </tr>
                    <tr>
                        <td>React.js</td>
                        <td>Node.js</td>
                        <td>--</td>
                        <td>PhpStorm</td>
                    </tr>
                </tbody>
        </table>
    </section>
</template>

<style scoped>
p{
    text-align: center;
    margin-bottom: 4rem;
}

h1{
    text-align: center;
    margin-top: 4rem;
    font-size: 48px;
}
</style>
