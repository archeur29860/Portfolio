<script setup lang="ts">

import { onMounted } from 'vue';

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) {
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    }
  });
});

</script>

<template>
  <div class="cursor"></div>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh);
  /* padding-top: 60px; */
  /* padding-bottom: 40px; */
  box-sizing: border-box;
}
.cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--accent-color);
  opacity: 0.5;
  /* Ensures the cursor doesn't interfere with mouse events on other elements */
  pointer-events: none;
}
</style>
