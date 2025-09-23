<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import CardItem from '@/components/CardItem.vue';

const props = defineProps<{progressThrough: number}>();

const events = ref([
{
    id: 0,
    date: 'Juin 2022',
    title: 'Baccalauréat spécialité NSI, Mathématiques',
    description: "Obtention du baccalauréat avec mention, avec une spécialisation en Numérique et Sciences Informatiques. Formation axée sur la programmation en Python, les algorithmes, la logique et les mathématiques appliquées à l’informatique, fournissant une solide base pour le développement de solutions logicielles et l’analyse de données.",
    url: new URL('@/assets/pictures/kheuneuLogo.png', import.meta.url).href
},
{
    id: 1,
    date: 'Septembre 2022 - Avril 2024',
    title: 'École 42 - Tronc commun',
    description: "Tronc commun axé sur l'algorithmique, la programmation système et la résolution de problèmes. Expériences pratiques : gestion de signaux, pipes et heredocs, implémentation d’algorithmes de tri, création de parsers ou encore expérimentation de raycasting... Formation basée sur l’apprentissage peer-to-peer, favorisant réflexion critique, logique et communication efficace entre pairs selon une norme stricte afin d'apporter rigueur, lisibilité, modularité et maintenabilité dans le code.",
    url: new URL('@/assets/pictures/42logo.png', import.meta.url).href
  },
{
    id: 2,
    date: 'Mai 2024 - Novembre 2024',
    title: 'Stage Développeur Fullstack - Crédit Mutuel, Arkéa',
    description: "J’ai participé à la refonte technique et ergonomique d’un outil interne vieillissant, marqué par une forte dette technique. J’ai travaillé sur un environnement moderne avec Vue.js et Java 21, en appliquant une norme stricte et en mettant en œuvre des tests avec Postman et Cypress. Ce stage m’a permis de renforcer mes compétences techniques tout en évoluant dans un cadre agile, favorisant la collaboration, la communication et la qualité du produit livré.",
    url: new URL('@/assets/pictures/arkeaLogo.jpg', import.meta.url).href
  },
{
    id: 3,
    date: 'Décembre 2024 - Aujourd\'hui',
    title: 'Poursuite à l\'École 42 - Master 2',
    description: "Je poursuis ma formation à l’École 42 en Master 2 (Web, Ia, Data). Passionné par la data, je développe mes compétences en Python à travers des projets d’analyse de données, de visualisation et de machine learning, incluant la conception et l’entraînement de modèles d’IA. Cette formation me permet de combiner mon appétence pour la data avec des projets concrets et ambitieux, consolidant mes connaissances en data science et intelligence artificielle tout en appliquant des méthodes et outils modernes.",
    url: new URL('@/assets/pictures/42logo.png', import.meta.url).href
  },
{
    id: 4,
    date: 'NOW',
    title: 'Recherche d\'alternance (2 ans)',
    description: "Je suis à la recherche d’une alternance pour approfondir mes compétences en intelligence artificielle et data science, et mettre en pratique mon intérêt pour l’analyse de données, la modélisation et les projets Python orientés IA. Je souhaite contribuer à des projets stimulants tout en continuant à développer mon expertise technique dans le domaine de la data.",
    url: ''
  },
]);

const findEvent = computed(() => {
  return events.value.find(event => event.id === props.progressThrough);});

</script>

<template>
<div class="timeline-wrapper">
  <div class="progressbar-wrapper">
      <div class="progressbar-timeline"></div>
      <div class="progressbar-upline"></div>
  </div>
  <div class="carditem-wrapper">
      <CardItem v-if="findEvent"
        :title="findEvent.title"
        :date="findEvent.date"
        :description="findEvent.description"
        :url="findEvent?.url"
      />
    </div>
</div>
</template>

<style scoped>

.timeline-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  padding: 3rem;
}

.carditem-wrapper {
  box-sizing: border-box;
    width: 100%;
    height: auto;
}

.progressbar-wrapper {
  --height-progressbar: 1rem;
  position: relative;
  width: 90%;
}

.progressbar-upline {
  max-width: 90%;
  min-width: 10%;
  width: 10%;
  height: var(--height-progressbar);
  background-color: var(--text-color);;
  z-index: 10000;
  margin-top: calc(-1 * var(--height-progressbar));
  transition: width 0.5s ease-in-out;
  }
  
  .progressbar-timeline {
    width: 100%;
    height: var(--height-progressbar);
    background-color: var(--primary-color);
    opacity: 0.5;
    z-index: 9;
}
</style>
