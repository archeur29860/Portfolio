<script setup lang="ts">
interface CardItemProps {
    title: string;
    date: string;
    description: string;
    url?: string;
}

const props = defineProps < CardItemProps > ();
// const imgUrl = new URL(import.meta.url);
</script>

<template>
<div class="carditem">
    props.url {{ props.url }}
    <h3 class="date">{{ props.date }}</h3>
    <h3 class="title">{{ props.title }}</h3>
    <div class="description-wrapper">
        <div class="description">{{ props.description }}</div>
        <div class="parent" :class="{invisible: !props.url}">
            <div class="div1 radius"></div>
            <div class="div2 radius"></div>
            <div class="div3 radius"></div>
            <div class="div4 radius"></div>
            <div class="div5 radius"></div>
            <div class="div6 radius"></div>
            <div class="div7 radius"><img class="logo" :src="props.url" alt="logo" /> </div>
            <div class="div8 radius"></div>
            <div class="div9 radius"></div>
            <div class="div10 radius"></div>
        </div>
    </div>
</div>
</template>

<style scoped>
.carditem {
    /* border: 1px solid var(--accent-color); */
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 2rem;
    height: 100vh;
    border-radius: 1rem;
}

.date {
    position: relative;
    font-weight: 600;
    font-size: 7rem;
    opacity: 0.3;
    margin: 0;
}

.title {
    font-weight: 700;
    font-family: 'Clash Display', sans-serif;
    font-size: 4rem;
    margin: 0;
}

.description-wrapper {
    /* border: 1px solid var(--primary-color); */
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 5rem;
    margin-top: 5rem;
}

.description {
    /* border: 1px solid var(--secondary-color); */
    margin: 0px;
    padding: 0px;
    max-width: 60%;
}

.logo {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
}

.parent {
    /* border: 1px solid var(--secondary-color); */
    display: grid;
    grid-template-columns: repeat(4, 0.5fr) 1fr 0.5fr;
    grid-template-rows: 0.5fr 1fr 0.5fr repeat(2, 0.25fr) 0.5fr;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
}

.invisible {
    opacity: 0;
}

.radius {
    border-radius: 0.5rem;
}

.div1 { grid-area: 2 / 2 / 4 / 3; background-color: var(--primary-color); opacity: 0.2;}
.div2 { grid-area: 4 / 1 / 5 / 2; background-color: var(--accent-color);}
.div3 { grid-area: 4 / 2 / 5 / 3; background-color: var(--text-color); opacity: 0.2;}
.div4 { grid-area: 1 / 3 / 2 / 5; background-color:  var(--secondary-color); }
.div5 { grid-area: 3 / 6 / 4 / 7; background-color:  var(--secondary-color); }
.div6 { grid-area: 5 / 1 / 6 / 2; background-color:  var(--secondary-color); opacity: 0.2;}
.div7 { grid-area: 2 / 3 / 6 / 6; width: 15rem; height: 15rem; background-color:  var(--accent-color); }
.div8 { grid-area: 5 / 6 / 6 / 7; background-color:  var(--text-color); }
.div9 { grid-area: 6 / 5 / 7 / 7; background-color:  var(--secondary-color); opacity: 0.2;}
.div10 { grid-area: 6 / 3 / 7 / 4; background-color:  var(--primary-color); }
</style>
