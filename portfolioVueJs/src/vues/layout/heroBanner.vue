<template>
<section class="hero-banner">
    <div class="avatar-container">
        <img class="avatar" src="https://cdn-icons-png.flaticon.com/512/168/168726.png" alt="Avatar" />
    </div>
    <div class="hero-info">
        <h2 class="name">CHEDOTAL Matéo</h2>
        <p class="description">
            Étudiant Bac+5 à l’école 42, passionné par Python, la data et l’IA. Curieux et rigoureux, j’aime relever des défis techniques et collaborer sur des projets innovants.
        </p>
    </div>
</section>
</template>

<script lang="ts">
// Tu peux ajouter des props pour rendre le composant dynamique si besoin
</script>

<style scoped>
.hero-banner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5rem 2rem;
    gap: 5rem;
}

.avatar-container {
    justify-content: center;
    align-items: center;
}

.avatar {
    width: 25rem;
    height: auto;
    border-radius: 20%;
    /* object-fit: cover; */
}

.hero-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    max-width: 50%
}

.name {
    font-size: 5rem;
    margin-bottom: 0px;
}

.description {
    font-size: 1.4rem;
}
</style>
