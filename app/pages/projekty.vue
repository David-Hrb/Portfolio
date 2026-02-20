<template>
  <section class="mt-32">
    <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-20">
      <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">{{ $t('Projects.header') }}</h2>
      <p class="text-[#B0B0B0] text-justify leading-relaxed text-lg italic mb-10">{{ $t('Projects.paragraphFull') }}</p>
      
      <div class="flex flex-wrap gap-3 mb-12">
        <button 
          @click="activeFilter = null"
          :class="[!activeFilter ? 'bg-[#E0E0E0] text-[#111111]' : 'bg-[#1E1E1E] text-gray-400 border-white/5']"
          class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          All
        </button>
        <button 
          v-for="filter in Filters" 
          :key="filter.id"
          @click="toggleFilter(filter.id)"
          :class="[activeFilter === filter.id ? 'bg-[#E0E0E0] text-[#111111]' : 'bg-[#1E1E1E] text-gray-400 border-white/5 hover:border-white/20']"
          class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          {{ $t(filter.name_key) }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="item in filteredProjects"
          :key="item.id || item.title"
          class="group flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#1E1E1E]/60 backdrop-blur-md transition-all duration-500 hover:border-white/10"
        >
          <div class="relative overflow-hidden h-48 bg-[#111111]">
            <img
              v-if="item.pictures?.length"
              :src="`/images/${item.pictures[0]}`"
              :alt="$t(item.title_key)"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-[#333333]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-80"></div>
          </div>

          <div class="flex flex-col flex-1 gap-4 p-6">
            <h3 class="text-xl font-bold text-[#E0E0E0] transition-colors duration-300">
              {{ $t(item.title_key) }}
            </h3>

            <p class="text-sm text-gray-400 line-clamp-3">
              {{ $t(item.desc_key) }}
            </p>

            <div class="flex flex-wrap gap-2">
              <div
                v-for="(tech, index) in item.technologies"
                :key="item.title_key + tech + index"
                class="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
              >
                <img
                  v-if="getTechIcon(tech)"
                  :src="getTechIcon(tech)"
                  :alt="tech"
                  class="w-3.5 h-3.5 object-contain"
                />
                <span class="text-[10px] uppercase tracking-wider font-semibold text-gray-400">{{ tech }}</span>
              </div>
            </div>

            <div v-if="item.links?.github" class="flex mt-auto justify-between w-full pt-4">
              <a
                :href="item.links.github"
                target="_blank"
                class="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <NuxtLink 
                :to="localePath('/')" 
                class="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] hover:text-primary-500 transition-all relative group"
              >
                {{ $t('Projects.moreText') }} &#8594;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import projektyData from '~/assets/json/projekty.json'

const { t } = useI18n()
const localePath = useLocalePath()

interface Projekt {
  id?: string | number
  title: string
  title_key: string
  desc_key: string
  technologies: string[]
  pictures?: string[]
  links: {
    github?: string
    live?: string
  }
  filtrs?: number[]
}

const activeFilter = ref<number | null>(null)

const Filters = ref([
  { id: 1, name_key: 'Projects.filters.web' },
  { id: 2, name_key: 'Projects.filters.game' },
  { id: 3, name_key: 'Projects.filters.open_source' },
  { id: 4, name_key: 'Projects.filters.school' },
  { id: 5, name_key: 'Projects.filters.desktop' },
  { id: 6, name_key: 'Projects.filters.mobile' },
  { id: 7, name_key: 'Projects.filters.design' },
  { id: 8, name_key: 'Projects.filters.scripts' },
  { id: 9, name_key: 'Projects.filters.security' },
  { id: 10, name_key: 'Projects.filters.ai' },
 // { id: 11, name_key: 'Projects.filters.hardware' },
  { id: 12, name_key: 'Projects.filters.other' }
])

const toggleFilter = (id: number) => {
  activeFilter.value = activeFilter.value === id ? null : id
}

const filteredProjects = computed(() => {
  if (!activeFilter.value) return projektyData
  return projektyData.filter((p: Projekt) => p.filtrs?.includes(activeFilter.value!))
})

const techIconMap: Record<string, string> = {
  'JavaScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript':   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Vue.js':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'Nuxt.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg',
  'HTML':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'SCSS':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Python':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C#':           'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  'SQLite':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  'MySQL':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'MariaDB':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg',
  'Unity':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
  'Git':          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Docker':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Figma':        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Build Tools':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'PocketBase':   '/images/pocketbase.svg',
  'GitHub':       '/images/github.svg'
}

const getTechIcon = (tech: string) => techIconMap[tech] || null
</script>