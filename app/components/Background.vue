<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-slate-950 pointer-events-none">
    <div class="relative h-full w-full blur-[60px] md:blur-[100px]">
      <div
        v-for="ball in balls"
        :key="ball.id"
        class="absolute rounded-full bg-gradient-to-br from-primary-500 to-primary-900 animate-float-right"
        :style="{
          width: `${ball.size}px`,
          height: `${ball.size}px`,
          top: `${ball.top}%`,
          left: '-25%',
          opacity: ball.opacity,
          animationDuration: `${ball.duration}s`,
          animationDelay: `-${ball.delay}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const ballCount = 15; 
const balls = ref([]);

const generateBalls = () => {
  const isMobile = window.innerWidth < 768;
  const minSize = isMobile ? 50 : 100;
  const maxSize = isMobile ? 150 : 300;

  const newBalls = [];
  for (let i = 0; i < ballCount; i++) {
    newBalls.push({
      id: Math.random(),
      size: Math.floor(Math.random() * (maxSize - minSize)) + minSize,
      top: Math.floor(Math.random() * 100),
      delay: Math.random() * 20,
      duration: Math.random() * 15 + 15, 
      opacity: Math.random() * 0.4 + 0.1
    });
  }
  balls.value = newBalls;
};

let resizeTimer;
const handleResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(generateBalls, 250);
};

onMounted(() => {
  generateBalls();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@keyframes float-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(150vw);
  }
}

.animate-float-right {
  animation-name: float-right;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}
</style>