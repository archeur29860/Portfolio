<script setup lang="ts">
interface CardItemProps {
    title: string;
    date: string;
    description: string;
    url: string;
}

const props = defineProps<CardItemProps>();

const imgUrl = new URL(props.url, import.meta.url).href;

</script>

<template>
<div class="carditem">
    <h3 class="date">{{ props.date }}</h3>
    <h3 class="title">{{ props.title }}</h3>
    <p class="description">{{ props.description }}</p>
    <img :src="imgUrl" alt="logo"><img/>
</div>
</template>

<style scoped>

.carditem {
    border: 0.1rem solid var(--neutral-color);
    padding: 1rem;
    margin: 2rem;
    height: 100%;
    border-radius: 1rem;
    background: var(--primary2-color);
}

.date {
    position: relative;
    font-weight: 600;
    font-size: 7rem;
    opacity: 0.3;
    margin: 0;
    /* margin-bottom: 0.5rem; */
}

.title {
    font-weight: 700;
    font-family: 'Clash Display', sans-serif;
    font-size: 4rem;
    margin: 0;
}
</style>