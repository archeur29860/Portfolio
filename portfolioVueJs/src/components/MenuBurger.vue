<script setup lang="ts">
import '@/assets/css/animations.css';
import {
    ref,
    defineEmits
} from 'vue';

const isOpen = ref(false);

function toggleMenu() {
    isOpen.value = !isOpen.value;
}

const emit = defineEmits<{
    scrollToPageEmit: [id: number]
}>();
</script>

<template>
<div class="menu-burger" @click.prevent="toggleMenu">
    <div :class="{line: true, line1: isOpen}"></div>
    <div :class="{line: true, line2: isOpen}"></div>
    <div :class="{line: true, line3: isOpen}"></div>
</div>
<transition name="fade">
  <div v-if="isOpen" class="menu">
      <h3 @click.prevent="toggleMenu(); emit('scrollToPageEmit', 0)">Acceuil</h3>
      <h3 @click.prevent="toggleMenu();emit('scrollToPageEmit', 1)">Mon parcours</h3>
      <h3 @click.prevent="toggleMenu();emit('scrollToPageEmit', 2)">Mes langages</h3>
      <h3 @click.prevent="toggleMenu();emit('scrollToPageEmit', 3)">Mes projets</h3>
      <h3 @click.prevent="toggleMenu();emit('scrollToPageEmit', 4)">Contact</h3>
  </div>
</transition>

</template>

  
<style scoped>

h3 {
  font-size: clamp(2rem, 5vh, 4rem);
}

.menu-burger {
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem;
    width: 3rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    opacity: 50%;
    transition: all 0.75s ease;
    
}

.line {
    width: 100%;
    height: 0.4rem;
    background-color: var(--text-color);
    border-radius: 0.2rem;
    transition: all 0.5s ease;
}

.menu-burger:hover {
    opacity: 100%;
}

.line1 {
    transform:translateY(0.6rem) rotate(45deg);
}

.line2 {
    opacity: 0;
}

.line3 {
    transform: translateY(-1rem) rotate(-45deg);
}

.menu {
    backdrop-filter: blur(1rem);
    background-color: color-mix(in srgb, black 50%, transparent);
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 999;
}

/* fade in / fade out */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}


</style>
