<script setup lang="ts">
import HeroBanner from '@/vues/layout/heroBanner.vue';
import Timeline from '@/vues/layout/timeline.vue';
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

function scrollToTitle() {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }
}

function scrollToProgressbar() {
  const progressbar = document.querySelector('#top-silde-progressbar');
  if (progressbar) {
      progressbar.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  }
}

function scrollToEnd() {
    const avatar = document.querySelector('.end');
    if (avatar) {
        avatar.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }
}

const progressThrough = ref(0);

watch(progressThrough, (newVal) => {
      const upline = document.querySelector('.progressbar-upline') as HTMLElement;
      if (upline) {
        upline.style.width = `${10 + (newVal * 0.8)}%`;
      }
});


interface PageFunctions {
  [key: number]: () => void;
}

const pages: PageFunctions = {
  0: scrollToTitle,
  1: scrollToProgressbar,
  2: scrollToEnd
};

const pageOn = ref(0)
const totalCard = 4;

function scrollToPage(direction: string) {
    if (pageOn.value === 1) {
        if (direction === "up" && progressThrough.value > 0) {
            progressThrough.value = Math.max(0, progressThrough.value - 100/totalCard);
            return;
        } else if (direction === "down" && progressThrough.value < 100) {
            progressThrough.value = Math.min(100, progressThrough.value + 100/totalCard);
            return;
        }
    }
    if (direction === "up" && pageOn.value > 0) {
        pageOn.value -= 1;
        pages[pageOn.value]();
    } else if (direction === "down" && pageOn.value < Object.keys(pages).length - 1) {
        pageOn.value += 1;
        pages[pageOn.value]();
    }
}

let wheelTimeout: number | null = null;

function handleWheel(event: WheelEvent) {
    if (wheelTimeout) return;
    event.preventDefault();
    let direction = event.deltaY < 0 ? "up" : "down";
    scrollToPage(direction);
    wheelTimeout = window.setTimeout(() => {
        wheelTimeout = null;
        }, 300);    
}

const lastTouchY = ref(0);

let touchTimeout: number | null = null;

function handleTouchStart(event: TouchEvent) {
  const touch = event.touches[0];
  if (touch) {
    lastTouchY.value = touch.clientY;
  }
}

function handleTouchEnd(event: TouchEvent) {
  if (touchTimeout) return;

  const touch = event.changedTouches[0];
  if (!touch) return;

  const deltaY = touch.clientY - lastTouchY.value;

  if (Math.abs(deltaY) > 50) {
    const direction = deltaY < 0 ? "down" : "up";
    scrollToPage(direction);

    touchTimeout = window.setTimeout(() => {
      touchTimeout = null;
    }, 300);
  }
}

onMounted(() => {
    disableScroll();
    scrollToTitle();
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
});

onBeforeUnmount(() => {
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchend', handleTouchEnd);
    enableScroll();
});
</script>
<template>
<HeroBanner class="herobanner"/>
<Timeline :progressThrough="progressThrough/25"/>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p>space</p>
<p class="end">space</p>
</template>

<style scoped>

.herobanner {
    width: 100%;
    height: 100vh;
}

</style>
