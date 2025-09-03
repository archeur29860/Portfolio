<script setup lang="ts"></script>

<template>
  <header class="fixed-header">
    <h1><a href="#">Qui suis-je ?</a></h1>
    <h1><a href="#">Mon parcours</a></h1>
    <h1><a href="#">Me contacter</a></h1>
  </header>
  <div class="app-container">
    <router-view />
  </div>
  <footer class="fixed-footer">
    <p>By Matéo CHEDOTAL</p>
  </footer>
</template>

<style scoped>

.fixed-header {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  left: 0;
  width: 100vw;
  height: 60px;
  background: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 2rem;
  background: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  font-family: 'Bebas Neue';
  font-size: 1.4rem;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px); /* 60px header + 40px footer */
  padding-top: 60px;
  padding-bottom: 40px;
  box-sizing: border-box;
}
</style>
