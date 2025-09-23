<script setup lang="ts">
import CustomCursor from './components/CustomCursor.vue';
</script>
<template>
  <CustomCursor />
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
</style>
