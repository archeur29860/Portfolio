<script setup lang="ts">
const avatarUrl = new URL('@/assets/mchedota_s.jpg', import.meta.url).href;

</script>

<template>
<section class="hero-banner">
    <div class="parent">
<div class="div1 radius"> </div>
<div class="div2 radius"> 
    <img class="avatar" :src="avatarUrl" alt="Avatar" />
</div>
<div class="div3 radius"> </div>
<div class="div4 radius"> </div>
<div class="div5 radius"> </div>
<div class="div6 radius"> </div>
<div class="div7 radius"> </div>
<div class="div8 radius"> </div>
<div class="div9 radius"> </div>
<div class="div10 radius"> </div>
<div class="div11 radius"> </div>
<div class="div12 radius"> </div>
</div>
    <!-- <div class="avatar-container"> -->
        <!-- <img class="avatar" :src="avatarUrl" alt="Avatar" /> -->
    <!-- </div> -->
    <div class="hero-info">
        <div class="texture-text">
            <h1 class="name">CHEDOTAL Matéo</h1>
        </div>
        <p class="description">
            Étudiant Bac+5 à l’école 42, passionné par Python, la data et l’IA. Curieux et rigoureux, j’aime relever des défis techniques et collaborer sur des projets innovants.
        </p>
    </div>
</section>
</template>

<style scoped>
.hero-banner {
    display: flex;
    flex-wrap: nowrap;
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
    border-radius: 1rem;;
    animation: appear 1s ease 0s 1 normal;
    /* object-fit: cover; */
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
    .name {
    color: var(--secondary1-color);
    font-weight: 700;
    font-family: 'Clash Display', sans-serif;
    font-size: 8rem;
    margin-bottom: 4rem;
}

.description {
    font-size: 2rem;
    margin: 0px;
    padding: 0px;
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

.div1 { grid-area: 1 / 1 / 2 / 3; background-color: var(--text-color); opacity: 0.05;}
.div2 { grid-area: 2 / 2 / 4 / 5; } /*; background-color: var(--primary-color)*/
.div3 { grid-area: 1 / 5 / 2 / 6; background-color: var(--secondary-color);}
.div4 { grid-area: 2 / 5 / 3 / 6; background-color: var(--secondary-color);}
.div5 { grid-area: 4 / 4 / 5 / 5; background-color: var(--text-color); opacity: 0.05;}
.div6 { grid-area: 4 / 5 / 5 / 6; background-color: var(--primary-color); opacity: 0.2;}
.div7 { grid-area: 5 / 5 / 7 / 6; background-color: var(--accent-color);}
.div8 { grid-area: 5 / 4 / 6 / 5; background-color: var(--text-color); opacity: 0.05;}
.div9 { grid-area: 6 / 4 / 7 / 5; background-color: var(--text-color);}
.div10 { grid-area: 4 / 2 / 6 / 4; background-color: var(--text-color);}
.div11 { grid-area: 3 / 1 / 5 / 2; background-color: var(--text-color); opacity: 0.05;}
.div12 { grid-area: 5 / 1 / 7 / 2; background-color: var(--secondary-color);}
</style>
