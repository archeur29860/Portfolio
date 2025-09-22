<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{url?: string}>();
</script>

<template>
<a :href="props.url" target="_blank" rel="noopener">
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.165c-3.338.724-4.033-1.613-4.033-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.932 0-1.31.468-2.38 1.235-3.22-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.872.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.922.43.372.815 1.102.815 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
</a>
</template>

  
<style scoped>
a svg {
    cursor: none;
    color: var(--text-color);
    opacity: 0.5;
    transition: all 1s ease;
}

a:hover svg {
    opacity: 1;
    color: var(--secondary-color);
}
</style>
