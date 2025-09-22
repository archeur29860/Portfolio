<script setup lang="ts">
import {
    defineProps
} from 'vue';
import GithubIcon from './GithubIcon.vue';

import type {
    ProjectPreviewProps
} from '@/types/components.ts';

const props = defineProps < {
    project: ProjectPreviewProps
} > ();
</script>

<template>
<div class="project-card-wrapper">
    <div class="project-card">
        <div class="project-card-text-wrapper">
            <div class="project-card-header">

                <h1 class="project-title">{{ props.project.title }}<GithubIcon v-if="props.project.urlGithub" :url="props.project.urlGithub"/></h1>
                <div class="project-skills">
                    <div class="skill-item" v-for="skill in props.project.skills">{{ skill }}</div>
                </div>
            </div>
            <div class="separator"></div>
            <div class="project-card-footer">
                <div class="project-description" v-html="props.project.description"></div>
            </div>
            
        </div>
        <div class="project-image">
            <img class="imageOfProject" :src="props.project.urlImage" alt="imageOfPorject" />
        </div>
    </div>
</div>
</template>

<style scoped>
.project-card-wrapper {
    --gap-between-skills: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    box-sizing: border-box;
}

.project-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background: color-mix(in srgb, var(--primary-color) 3%, transparent);
    border-radius: 1rem;
}

.project-card-text-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    padding-right: 2rem;
    width: 100%;
    height: 100%;
}

.separator{
    width: 100%;
    height: 0.2rem;
    border-radius: 1rem;
    background-color: var(--primary-color);
    opacity: var(--text-alpha);
}

.project-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
}

.project-skills {
    display: flex;
    flex-direction: row;
    gap: var(--gap-between-skills);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--secondary-color);
}

.skill-item::after {
    padding-left: var(--gap-between-skills);
    content: "/";
}

.skill-item:last-child::after {
    padding-right: 0;
    content: '';
}

.project-description {
    font-size: 1.6rem;
    color: var(--accent-color);
    text-align: justify;
}

.project-image {
    width: auto;
    height: 50vh;
    /* prend toute la hauteur dispo */
    aspect-ratio: 1 / 1;
    /*carré */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 1rem;
    overflow: hidden;
    background-color: white;
}

.imageOfProject {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
