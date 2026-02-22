<template>
  <div class="about-page">
    <section class="min-h-[50vh] pt-32 pb-16 flex items-center relative overflow-hidden">
      <div class="hero-glow"></div>
      <UContainer class="max-w-6xl w-[90%] md:w-[80%] relative z-10">
        <div class="max-w-2xl">
          <span class="text-primary-400 text-sm font-bold uppercase tracking-[0.25em] mb-4 block">
            {{ $t('about.label') }}
          </span>
          <h1 class="text-5xl md:text-7xl font-bold tracking-tighter text-text-bright mb-6 leading-none">
            {{ $t('about.heading') }}
          </h1>
          <p class="text-text-muted text-lg leading-relaxed max-w-xl">
            {{ $t('about.intro') }}
          </p>
        </div>
      </UContainer>
    </section>

    <section class="pb-32">
      <UContainer class="max-w-6xl w-[90%] md:w-[80%]">
        <div class="relative">
          <div class="timeline-line"></div>

          <div class="flex flex-col gap-0">
            <div
              v-for="(event, index) in timeline"
              :key="index"
              class="timeline-item"
              :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
            >
              <div class="timeline-year-wrapper">
                <div class="timeline-dot"></div>
                <div class="timeline-year">{{ event.year }}</div>
              </div>

              <div class="timeline-card glass-card rounded-2xl p-6 md:p-8 group">
                <div class="flex items-start gap-4 mb-4">
                  <div>
                    <span
                      class="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border mb-2 inline-block"
                      :class="event.tagClass"
                    >
                      {{ $t(event.tag) }}
                    </span>
                    <h3 class="text-text-bright text-xl font-bold leading-tight">
                      {{ $t(event.title) }}
                    </h3>
                  </div>
                </div>
                <p class="text-text-muted leading-relaxed text-sm">
                  {{ $t(event.desc) }}
                </p>
                <div v-if="event.techs" class="flex flex-wrap gap-2 mt-4">
                  <span
                    v-for="tech in event.techs"
                    :key="tech"
                    class="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-text-muted"
                  >{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-now-wrapper">
            <div class="timeline-dot timeline-dot-now"></div>
            <div class="timeline-now-label">
              <span class="now-pulse"></span>
              {{ $t('about.now') }}
            </div>
          </div>
        </div>

      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const timeline = [
  {
    year: '2008',
    tag: 'about.timeline.t1.tag',
    tagClass: 'text-purple-400 border-purple-400/30',
    title: 'about.timeline.t1.title',
    desc: 'about.timeline.t1.desc',
    techs: null,
  },
  {
    year: '2014',
    tag: 'about.timeline.t2.tag',
    tagClass: 'text-blue-400 border-blue-400/30',
    title: 'about.timeline.t2.title',
    desc: 'about.timeline.t2.desc',
    techs: ['Scratch'],
  },
  {
    year: '2023',
    tag: 'about.timeline.t3.tag',
    tagClass: 'text-yellow-400 border-yellow-400/30',
    title: 'about.timeline.t3.title',
    desc: 'about.timeline.t3.desc',
    techs: ['Unity', 'HTML', 'CSS'],
  },
  {
    year: '2025',
    tag: 'about.timeline.t4.tag',
    tagClass: 'text-green-400 border-green-400/30',
    title: 'about.timeline.t4.title',
    desc: 'about.timeline.t4.desc',
    techs: ['JavaScript', 'Python'],
  },
  {
    year: '2026',
    tag: 'about.timeline.t5.tag',
    tagClass: 'text-primary-400 border-primary-400/30',
    title: 'about.timeline.t5.title',
    desc: 'about.timeline.t5.desc',
    techs: ['Nuxt', 'Vue', 'Tailwind', 'Java', 'SQL', 'Docker', 'SQLite', 'TypeScript'],
  }
]

</script>

<style scoped>
.hero-glow {
  position: absolute;
  top: -20%;
  left: -10%;
  width: 60%;
  height: 80%;
  background: radial-gradient(ellipse at center, rgba(0, 82, 255, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 80px;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 82, 255, 0.4) 5%,
    rgba(0, 82, 255, 0.2) 90%,
    transparent
  );
}

@media (max-width: 768px) {
  .timeline-line {
    left: 20px;
  }
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: start;
  gap: 0;
  margin-bottom: 64px;
  position: relative;
}

.timeline-left .timeline-year-wrapper {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
}

.timeline-left .timeline-card {
  grid-column: 1;
  grid-row: 1;
  margin-right: 24px;
}

.timeline-right .timeline-year-wrapper {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
}

.timeline-right .timeline-card {
  grid-column: 3;
  grid-row: 1;
  margin-left: 24px;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-primary-500);
  border: 2px solid var(--color-bg-main);
  box-shadow: 0 0 0 3px rgba(0, 82, 255, 0.3);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.timeline-year {
  font-family: var(--font-family-display);
  font-weight: 800;
  font-size: 0.75rem;
  color: var(--color-primary-400);
  letter-spacing: 0.05em;
  text-align: center;
}

.timeline-now-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 8px;
  width: 100%;           
  position: relative;
  margin-bottom: 32px;   
}

@media (max-width: 768px) {
  .timeline-now-wrapper {
    align-items: flex-start; 
    padding-left: 13px;     
  }
}

.timeline-dot-now {
  background: #22c55e;
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2), 0 0 16px rgba(34, 197, 94, 0.4);
}

.timeline-now-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  color: #22c55e;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.now-pulse {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}


@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 40px 1fr;
    grid-template-rows: auto;
    margin-bottom: 48px;
  }

  .timeline-left .timeline-year-wrapper,
  .timeline-right .timeline-year-wrapper {
    grid-column: 1;
    grid-row: 1;
    padding-top: 12px;
  }

  .timeline-left .timeline-card,
  .timeline-right .timeline-card {
    grid-column: 2;
    grid-row: 1;
    margin-left: 16px;
    margin-right: 0;
  }
}
</style>