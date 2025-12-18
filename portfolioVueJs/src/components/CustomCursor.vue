<script setup lang="ts">
import '@/assets/css/animations.css';
import { ref, onMounted, onUnmounted } from 'vue';

const cursorRef = ref<HTMLElement | null>(null);
const cursor2Ref = ref<HTMLElement | null>(null);

/**
 * Visible seulement sur desktop
 */
const isDesktop = ref(window.innerWidth > 768);

function updateViewport() {
  isDesktop.value = window.innerWidth > 768;
}

/**
 * Mouse positions
 */
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let bigX = mouseX;
let bigY = mouseY;

let animationId: number | null = null;

onMounted(() => {
  window.addEventListener('resize', updateViewport);

  const small = cursorRef.value;
  const big = cursor2Ref.value;
  if (!small || !big) return;

  const smallHalf = small.offsetWidth / 2;
  const bigHalf = big.offsetWidth / 2;

  /**
   * Mouse move
   */
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDesktop.value) return;

    mouseX = e.clientX;
    mouseY = e.clientY;

    small.style.opacity = '0.9';
    big.style.opacity = '0.5';

    small.style.transform = `translate3d(${mouseX - smallHalf}px, ${mouseY - smallHalf}px, 0)`;
  };

  /**
   * Smooth follow animation
   */
  const speed = 0.12;
  const animate = () => {
    if (isDesktop.value) {
      bigX += (mouseX - bigX) * speed;
      bigY += (mouseY - bigY) * speed;

      big.style.transform = `translate3d(${bigX - bigHalf}px, ${bigY - bigHalf}px, 0)`;
    }

    animationId = requestAnimationFrame(animate);
  };

  /**
   * Window focus / blur
   */
  const handleBlur = () => {
    small.style.opacity = '0';
    big.style.opacity = '0';
  };

  const handleFocus = () => {
    if (!isDesktop.value) return;
    small.style.opacity = '0.9';
    big.style.opacity = '0.5';
  };

  /**
   * Hide when leaving window
   */
  const handleMouseLeave = () => {
    small.style.opacity = '0';
    big.style.opacity = '0';
  };

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('blur', handleBlur);
  window.addEventListener('focus', handleFocus);

  animate();

  onUnmounted(() => {
    window.removeEventListener('resize', updateViewport);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
    window.removeEventListener('blur', handleBlur);
    window.removeEventListener('focus', handleFocus);

    if (animationId) cancelAnimationFrame(animationId);
  });
});
</script>

<template>
  <!-- ⚠️ Toujours présent dans le DOM -->
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
  opacity: 0;
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
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
  transition: width 0.18s ease, height 0.18s ease, border-color 0.18s ease;
}
</style>
