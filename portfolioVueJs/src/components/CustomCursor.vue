<script setup lang="ts">
import '@/assets/css/animations.css';
import { ref, onMounted, onUnmounted } from 'vue';

const cursorRef = ref<HTMLElement | null>(null);
const cursor2Ref = ref<HTMLElement | null>(null);

onMounted(() => {
  const small = cursorRef.value!;
  const big = cursor2Ref.value!;
  if (!small || !big) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let bigX = mouseX;
  let bigY = mouseY;

  const smallHalf = small.offsetWidth / 2;
  const bigHalf = big.offsetWidth / 2;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    small.style.transform = `translate3d(${mouseX - smallHalf}px, ${mouseY - smallHalf}px, 0)`;
  });

  const speed = 0.12;
  function animate() {
    bigX += (mouseX - bigX) * speed;
    bigY += (mouseY - bigY) * speed;
    big.style.transform = `translate3d(${bigX - bigHalf}px, ${bigY - bigHalf}px, 0)`;
    requestAnimationFrame(animate);
  }
  animate();
});
onUnmounted(() => {
  document.removeEventListener("mousemove", () => { });
});
</script>


<template>
  <div ref="cursorRef" class="cursor"></div>
  <div ref="cursor2Ref" class="cursor2"></div>
</template>

<style>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent-color);
  opacity: 0.9;
  pointer-events: none;
  z-index: 10000;
  will-change: transform;
}

.cursor2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid var(--accent-color);
  background: transparent;
  opacity: 0.5;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
  transition: width .18s ease, height .18s ease, border-color .18s ease;
}
</style>