<script setup lang="ts">
// import { ref } from 'vue';

const allProjects = [
  {
    id: 0,
    title: 'Projet 1',
    description: 'Description du projet 1',
    url: 'https://via.placeholder.com/150'
  },
  {
    id: 1,
    title: 'Projet 2',
    description: 'Description du projet 2',
    url: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Projet 3',
    description: 'Description du projet 3',
    url: 'https://via.placeholder.com/150'
  }
];

</script>

<template>
    <div class="projects-carousel" v-for="project in allProjects">
        <span>{{ project.title }}</span>
    </div>
</template>

<style scoped>
.projects-carousel {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}
</style>