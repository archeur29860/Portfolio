<script setup lang="ts">
import { ref, computed } from 'vue';
import CardItem from '@/components/CardItem.vue';

const props = defineProps<{progressThrough: number}>();

const events = ref([
{
    id: 0,
    date: 'Juin 2022',
    title: 'Baccalauréat spécialité NSI, Mathématiques',
    description: "Obtention du baccalauréat (spécialités Numérique & Sciences Informatiques et Mathématiques) avec mention.",
    url: new URL('@/assets/kheuneuLogo.png', import.meta.url).href
},
{
    id: 1,
    date: 'Septembre 2022 - Avril 2024',
    title: 'École 42 - Tronc commun',
    description: "Formation intensive en informatique (C, C++, Python, algorithmique, projets collaboratifs).",
    url: new URL('@/assets/42logo.png', import.meta.url).href
  },
{
    id: 2,
    date: 'Mai 2024 - Novembre 2024',
    title: 'Stage Développeur Fullstack - Crédit Mutuel, Arkéa',
    description: "Développement d\'applications web (Vue.js et Java/Spring), intégration CI/CD et bonnes pratiques en équipe agile.",
    url: new URL('@/assets/arkeaLogo.jpg', import.meta.url).href
  },
{
    id: 3,
    date: 'Décembre 2024 - Aujourd\'hui',
    title: 'Poursuite à l\'École 42 - Master 2 équivalent',
    description: "Spécialisation en web, data et intelligence artificielle, avec mise en pratique sur des projets avancés (Kubernetes, ArgoCD, CI/CD, IA).",
    url: new URL('@/assets/42logo.png', import.meta.url).href
  },
{
    id: 4,
    date: 'NOW',
    title: 'Recherche d\'alternance (2 ans)',
    description: "Je cherche une alternance en développement web / data / IA, disponible à partir de septembre 2025 ou janvier 2026, idéalement en Bretagne.",
    url: ''
  },
]);

const findEvent = computed(() => {
  return events.value.find(event => event.id === props.progressThrough);});
</script>

<template>
  <div id="top-silde-progressbar"></div>
<div class="progressbar-wrapper">
    <div class="progressbar-timeline"></div>
    <div class="progressbar-upline"></div>
</div>
<div class="carditem-wrapper">
    <CardItem
      :title="findEvent?.title"
      :date="findEvent?.date"
      :description="findEvent?.description"
      :url="findEvent?.url"
    />
  </div>
</template>

<style scoped>

.carditem-wrapper {
    width: 100%;
    height: auto;
}

.progressbar-wrapper {
  --width-progressbar: 1rem;
  margin-top: 5rem;
  position: relative;
  width: 90%;
}

.progressbar-upline {
  max-width: 90%;
  min-width: 10%;
  width: 10%;
  height: var(--width-progressbar);
  background-color: var(--text-color);;
  z-index: 10000;
  margin-top: calc(-1 * var(--width-progressbar));
  transition: width 0.5s ease-in-out;
  }
  
  .progressbar-timeline {
    width: 100%;
    height: var(--width-progressbar);
    background-color: var(--primary-color);
    opacity: 0.5;
    z-index: 9;
}
</style>
