<script setup lang="ts">
import { defineProps } from 'vue';

interface ProjectPreviewProps {
    id: number;
    title: string;
    description: string;
    url?: string;
}

const props = defineProps < ProjectPreviewProps > ();

</script>

<template>
    <div class="project-card">
        <h1>{{ props.id }}</h1>
        {{ props.title }} - {{ props.description }}
    </div>
</template>

<style scoped>
.project-card {
    border: 1px solid var(--accent-color);
    padding: 2rem;
    border-radius: 2rem;
    background-color: var(--secondary-color);
}
</style>