<script setup lang="ts">
import { watch } from 'vue';
import '@/assets/css/animations.css';

interface CardItemProps {
    title: string;
    date: string;
    description: string;
    url?: string;
}

const props = defineProps < CardItemProps > ();


// //animation card item on change
// watch(props, (newVal) => {
//   console.log('Événement actuel :', newVal);
//   const titleElement = document.querySelector('.title');
//     if (titleElement) {
//         titleElement.classList.remove('animate-reavealUp');
//         // Force reflow to restart the animation
//         // void titleElement.offsetWidth;
//         titleElement.classList.add('animate-reavealUp');
//     }
// });
</script>

<template>
<div class="carditem">
    <div>
        <div class="date">{{ props.date }}</div>
        <div class="title">{{ props.title }}</div>
    </div>
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
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    box-sizing: border-box;
    /* border: solid 1px red; */
}

/* .carditem > div {
    border: solid 1px blue;
} */

.date {
    font-weight: 600;
    font-size: 7rem;
    opacity: 0.3;
}

.title {
    font-weight: 700;
    font-family: 'Clash Display', sans-serif;
    font-size: 4rem;
}

.description-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    font-size: 2rem;
    color : var(--accent-color);
    }

.description {
    text-align: justify;
    box-sizing: border-box;
}

.logo {
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
}

.parent {
    flex-shrink: 0;;
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
