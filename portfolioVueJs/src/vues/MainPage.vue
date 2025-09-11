<script setup lang="ts">
import MenuBurger from '@/components/MenuBurger.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import Timeline from '@/components/Timeline.vue';
import Projects from '@/components/ProjectsBrowser.vue';
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { disableScroll, enableScroll, pages} from '@/types/scrollTo.ts';

const progressThrough = ref(0);

watch(progressThrough, (newVal) => {
      const upline = document.querySelector('.progressbar-upline') as HTMLElement;
      if (upline) {
        upline.style.width = `${10 + (newVal * 0.8)}%`;
      }
});

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

function handleEmitMenu(id: number) {
  pageOn.value = id;
  pages[id]();
  switch(id) {
    case 0:
        progressThrough.value = 0;
        break;
    case 1:
        progressThrough.value = 0;
        break;
  default:
        progressThrough.value = 100;
    break;
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
    pages[0]()
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
<MenuBurger @scrollToPageEmit="handleEmitMenu"/>
<div class="mainpage">
<HeroBanner class="herobanner"/>
<Timeline :progressThrough="progressThrough/25"/>
<Projects />
</div>
</template>

<style scoped>
.mainpage {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.herobanner {
    width: 100%;
    min-height: 100vh;
}

</style>
