<script setup lang="ts">
import {
    onMounted,
    ref,
    watch
} from 'vue';

import ProjectPreview from '@/components/ProjectPreview.vue';

import type { ProjectPreviewProps } from '@/types/components.ts';


const allProjects: ProjectPreviewProps[] = [{
        id: 0,
        title: 'Ft_transcendence',
        skills: ['Django REST', 'SQL', 'Docker', 'HTML', 'CSS', 'JavaScript'],
        description: "Ft_transcendence est un projet web complet dont l’objectif était de créer une application multi-utilisateurs avec des fonctionnalités interactives comme l'implémentation du jeu PONG et l’intégration de services externes.<br></br>\
        Le projet a été développé avec Django pour le backend, SQL pour la base de données, et HTML, CSS et JavaScript pour le frontend. Il utilise Docker pour la conteneurisation et intègre des APIs externes, comme Google pour l’authentification, permettant de gérer l’ensemble des interactions frontend-backend de manière fluide.",
        urlGithub: 'https://github.com/archeur29860/ft-transcendence',
        urlImage: new URL('@/assets/pictures/42logo.png', import.meta.url).href
    },
    {
        id: 1,
        title: 'Minishell',
        skills: ['C', 'Unix', 'Bash'],
        description: 'Minishell est un projet réalisé en C qui consistait à développer un interpréteur de commandes similaire de Bash. L’objectif était de créer un shell capable d’exécuter des commandes, gérer les redirections et les pipes, interpréter les variables d’environnement et réagir correctement aux signaux système.<br></br>\
        Ce projet m’a permis de renforcer mes compétences en programmation système, gestion des processus et de la mémoire, tout en respectant des contraintes strictes de fiabilité et de conformité au comportement attendu d’un shell Unix.',
        urlGithub: 'https://github.com/archeur29860/minishell',
        urlImage: new URL('@/assets/pictures/bash.png', import.meta.url).href
    },
    {
        id: 2,
        title: 'Stage Fullstack - Arkéa',
        skills: ['Vue.js', 'Java 21', 'Postman', 'Cypress', 'Apicurio', 'Méthode Agile'],
        description: 'Lors de mon stage de 6 mois chez Arkéa, j’ai participé à la refonte technique et ergonomique d’un outil interne vieillissant, marqué par une forte dette technique. J’ai travaillé sur un environnement moderne combinant Vue.js pour le front et Java 21 pour le back, avec l’appui d’outils comme Postman, Cypress et Apicurio pour les tests et la documentation des APIs.<br></br>\
        Ce stage m’a permis de renforcer mes compétences techniques tout en évoluant dans un cadre agile, favorisant la collaboration, la communication et la qualité du produit livré.',
        urlImage: new URL('@/assets/pictures/arkeaLogo.jpg', import.meta.url).href
    },
    {
        id: 3,
        title: 'Linear Regression',
        skills: ['Python', 'Machine Learning', 'Data Visualization', 'Gradient Descent'],
        description: 'Un projet d’introduction au Machine Learning visant à prédire le prix d’une voiture en fonction de son kilométrage. J’ai implémenté une régression linéaire en Python avec un algorithme de gradient descent, ce qui m’a permis de comprendre en profondeur l’entraînement d’un modèle et l’importance de la visualisation des données.',
        urlGithub: 'https://github.com/archeur29860/linear_regression',
        urlImage: new URL('@/assets/pictures/linearRegression.png', import.meta.url).href
    },
    {
        id: 4,
        title: 'Logistic Regression',
        skills: ['Python', 'Machine Learning', 'Data Visualization', 'Data Analysis', 'Gradient Descent'],
        description: 'Projet de classification basé sur la régression logistique, où l’objectif était de recréer un "Choixpeau magique" capable d’assigner les élèves de Poudlard à leur maison. J’ai travaillé sur l’analyse et la visualisation de données, puis entraîné un modèle de classification multi-classes avec descente de gradient. Ce projet m’a permis d’approfondir mes compétences en Machine Learning tout en développant une vraie démarche d’exploration et de préparation des données.',
        urlGithub: 'https://github.com/archeur29860/DSLR-Logistic_regression',
        urlImage: new URL('@/assets/pictures/logisticRegression.png', import.meta.url).href
    }
];

const currentSlideIndex = ref(0);

const prevSlide = () => {
    currentSlideIndex.value =
        (currentSlideIndex.value - 1 + allProjects.length) % allProjects.length;
};

const nextSlide = () => {
    currentSlideIndex.value =
        (currentSlideIndex.value + 1) % allProjects.length;
};

watch(currentSlideIndex, (newIndex) => {
    const slideWrapper = document.querySelector('.project-carousel-slide-wrapper') as HTMLElement;
    if (slideWrapper) {
        slideWrapper.style.transform = `translateX(-${100 * newIndex}%)`;
    }
});

onMounted(() => {
    const slideWrapper = document.querySelector('.project-carousel-slide-wrapper') as HTMLElement;
    if (slideWrapper) {
        slideWrapper.style.transform = 'translateX(0%)'; // première slide visible
    }
});
</script>

<template>
<div class="projects-browser">
    <div class="projects-carousel-wrapper">
        <div class="project-carousel-slide-wrapper">
            <ProjectPreview class="project-slide" v-for="project in allProjects"
            :key="project.id"
            :project="project"/>
        </div>
    </div>
    <div class="circles">
        <div  v-for="project in allProjects" :key="project.id" class="circle" :class="{ active: project.id === currentSlideIndex }"></div>
    </div>
    <div class="button-nav-carousel-wrapper">
        <div @click="prevSlide" class="button-nav-carousel"><</div>
        <div @click="nextSlide" class="button-nav-carousel">></div>
    </div>
</div>
</template>

<style scoped>
.projects-browser-title {
    text-align: center;
}

.projects-browser {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

.projects-carousel-wrapper {
    overflow: hidden;
    width: 100%;
}

.project-carousel-slide-wrapper {
    display: flex;
    transition: transform 1s ease;
    width: 100%;
}

.project-slide {
    flex: 0 0 100%;
    /* chaque slide = 100% du conteneur visible */
    max-width: 100%;
    /* évite que ça déborde */
    box-sizing: border-box;
}

.circles {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    margin: 1rem;
    opacity: 0.5;
    transition: opacity 0.5s ease;
}

.circle.active {
    opacity: 1;
}

.button-nav-carousel-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.button-nav-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: color-mix(in srgb, var(--secondary-color) 50%, transparent);
    font-size: 4rem;
    font-weight: bold;
    transition: all 0.75s ease;
}

.button-nav-carousel:hover {
    background-color: var(--secondary-color);
}
</style>
