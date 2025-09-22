<script setup lang="ts">
import '@/assets/css/animations.css';

const avatarUrl = new URL('@/assets/pictures/mchedota_s.jpg',
    import.meta.url).href;
</script>

<template>
<section class="hero-banner">
    <div class="parent">
        <div class="div1 radius"></div>
        <div class="div2 radius">
            <img class="avatar" :src="avatarUrl" alt="Avatar" />
        </div>
        <div class="div3 radius"></div>
        <div class="div4 radius"></div>
        <div class="div5 radius"></div>
        <div class="div6 radius"></div>
        <div class="div7 radius"></div>
        <div class="div8 radius"></div>
        <div class="div9 radius"></div>
        <div class="div10 radius"></div>
        <div class="div11 radius"></div>
        <div class="div12 radius"></div>
    </div>
    <div class="hero-info">
        <div class="name-wrapper">
            <div class="text-mask">
                <div class="name lastname">CHEDOTAL</div>
            </div>
            <div class="text-mask">
                <div class="name firstname">Matéo</div>
            </div>
        </div>
        <div class="description">
            Étudiant Bac+5 à l'école 42, passionné par Python, la data et l'IA. Curieux et rigoureux, j'aime relever des défis techniques et collaborer sur des projets innovants.
        </div>
    </div>
</section>
</template>

<style scoped>
.hero-banner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    /* border: 1px solid var(--secondary1-color); */
}

.avatar-container {
    /* border: 1px solid var(--secondary1-color); */
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 25rem;
    height: 25rem;
    border-radius: 1rem;
}

.hero-info {
    /* border: 1px solid var(--secondary1-color); */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    max-width: 50%;
}

.name-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 4rem;
    width: 100%;
}

.name {
    font-weight: 700;
    font-family: 'Clash Display', sans-serif;
    font-size: 8rem;
    transform: translateY(10rem);
}

.firstname {
    animation: revealUp 1.5s ease 0.25s forwards;

}

.lastname {
    animation: revealUp 1.5s ease forwards;

}

.description {
    font-size: 2rem;
    color: var(--accent-color);
    opacity: 0;
    animation: fadeIn 1.5s ease 2.5s forwards;
}

.parent {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr) repeat(2, 1fr);
    grid-template-rows: 0.4fr repeat(2, 1fr) repeat(2, 0.5fr) 0.2fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
}

.radius {
    border-radius: 1rem;
}

.div1 {
    animation: gelatine 1s ease 0s forwards;
    grid-area: 1 / 1 / 2 / 3;
    opacity: 0;
    background-color: color-mix(in srgb, var(--text-color) 5%, transparent);
}

.div2 {
    animation: gelatine 1.5s ease 1.5s forwards;
    grid-area: 2 / 2 / 4 / 5;
    opacity: 0;
}

/*; background-color: var(--primary-color)*/
.div3 {
    animation: gelatine 1s ease 1s forwards;
    grid-area: 1 / 5 / 2 / 6;
    opacity: 0;
    background-color: var(--secondary-color);
}

.div4 {
    animation: gelatine 1s ease 0.5s forwards;
    grid-area: 2 / 5 / 3 / 6;
    opacity: 0;
    background-color: var(--secondary-color);
}

.div5 {
    animation: gelatine 1s ease 0s forwards;
    grid-area: 4 / 4 / 5 / 5;
    opacity: 0;
    background-color: color-mix(in srgb, var(--text-color) 5%, transparent);
}

.div6 {
    animation: gelatine 1s ease 1s forwards;
    grid-area: 4 / 5 / 5 / 6;
    opacity: 0;
    background-color: color-mix(in srgb, var(--primary-color) 20%, transparent);
}

.div7 {
    animation: gelatine 1s ease 0.5s forwards;
    grid-area: 5 / 5 / 7 / 6;
    opacity: 0;
    background-color: var(--accent-color);
}

.div8 {
    animation: gelatine 1s ease 0.75s forwards;
    grid-area: 5 / 4 / 6 / 5;
    opacity: 0;
    background-color: color-mix(in srgb, var(--text-color) 5%, transparent);
}

.div9 {
    animation: gelatine 1s ease 1s forwards;
    grid-area: 6 / 4 / 7 / 5;
    opacity: 0;
    background-color: var(--text-color);
}

.div10 {
    animation: gelatine 1s ease 0.5s forwards;
    grid-area: 4 / 2 / 6 / 4;
    opacity: 0;
    background-color: var(--text-color);
}

.div11 {
    animation: gelatine 1s ease 1s forwards;
    grid-area: 3 / 1 / 5 / 2;
    opacity: 0;
    background-color: color-mix(in srgb, var(--text-color) 5%, transparent);
}

.div12 {
    animation: gelatine 1s ease 0.75s forwards;
    grid-area: 5 / 1 / 7 / 2;
    opacity: 0;
    background-color: var(--secondary-color);
}

</style>
