<template>
  <div>
    <section class="min-h-screen pt-32 pb-16 flex items-center justify-center">
      <UContainer class="max-w-6xl w-[90%] md:w-[80%]">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div class="flex-1 space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <header class="space-y-2">
              <h1 class="text-4xl md:text-6xl font-bold tracking-tighter text-[#E0E0E0]">
                David Hrbáček
              </h1>
              <h2 class="text-primary-500 text-xl md:text-2xl font-medium tracking-wide">
                {{ $t('main.header2') }} 
              </h2>

              <p class="text-[#B0B0B0] text-justify leading-relaxed text-lg italic mb-4">
                {{ $t('main.paragraph1') }} 
                {{ myAge() }}  
                {{ $t('main.paragraph1_2')  }}
              </p>
            </header>

            <div class="bg-[#1E1E1E]/40 border border-[#333333] backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl">
              <h2 class="text-primary-500 text-xl md:text-2xl font-medium tracking-wide"><code>&lt;/&gt;</code> {{ $t('main.header2_2') }}</h2>
              <div class="flex items-start gap-4">
                <p class="text-[#E0E0E0] text-justify leading-relaxed">
                  {{ $t('main.paragraph2') }}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <NuxtLink 
                :to="localePath('/projekty')" 
                class="inline-flex items-center justify-center px-6 py-3 bg-primary text-text-bright font-bold uppercase border border-[#333333] tracking-widest text-sm rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300"
              >
                {{ $t('nav.projects') }}
              </NuxtLink>

              <NuxtLink 
                :to="localePath('/kontakt')" 
                class="inline-flex items-center justify-center px-6 py-3 bg-primary text-text-bright font-bold uppercase border border-[#333333] tracking-widest text-sm rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300"
              >
                {{ $t('nav.contact') }}
              </NuxtLink>
            </div>
          </div>

          <div class="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative group">
              <div class="absolute -inset-4 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-500"></div>
              
            <div class="group relative w-64 h-64 md:w-120 md:h-120 overflow-hidden rounded-full border-2 border-[#333333] hover:border-primary-500 transition-all duration-500 shadow-2xl">
                <img 
                  :src="image" 
                  alt="David Hrbáček" 
                  class="w-full h-full object-top object-cover transition-all duration-700 scale-105 group-hover:scale-110 grayscale-0 [@media(hover:hover)]:grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>

        </div>
      </UContainer>
    </section>
    <section class=" bg-black/50 pt-10 pb-20 ">
       <UContainer class="max-w-6xl w-[90%] md:w-[80%] ">
          <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide mb-10">{{ $t('lang.header') }}</h2>
          <div class="flex flex-col gap-10">
            <div class="flex gap-4 items-start">
              <div class="sticky top-10 shrink-0"> 
                <div 
                  style="writing-mode: vertical-lr;" 
                  class="rotate-180 text-text-bright text-xl md:text-2xl font-medium tracking-wide whitespace-nowrap"
                >
                {{ $t('lang.skills.frontend') }} 	&#8592;
                </div>
              </div>

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-primary">
                <div 
                  v-for="item in sortedFrontend" 
                  :key="item.name" 
                  class="flex items-center gap-4 p-3 hover:bg-[#1E1E1E] rounded-lg transition-colors bg-[#1E1E1E]/40 backdrop-blur-md border border-white/5"
                >
                  <div class="shrink-0">
                    <img :src="item.icon" :alt="item.name" class="w-10 h-10 object-contain" />
                  </div>
                  
                  <div class="flex flex-col gap-2 min-w-0"> 
                    <span class="font-semibold text-lg leading-tight truncate">
                      {{ item.name }}
                    </span>
                    <span 
                      class="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border transition-colors duration-300 whitespace-nowrap"
                      :class="getSkillColor(item.skill)"
                    >
                      {{ getSkillLabel(item.skill) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="sticky top-10 shrink-0"> 
                <div 
                  style="writing-mode: vertical-lr;" 
                  class="rotate-180 text-text-bright text-xl md:text-2xl font-medium tracking-wide whitespace-nowrap"
                >
                {{ $t('lang.skills.backend') }} 	&#8592;
                </div>
              </div>

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-primary">
                <div 
                  v-for="item in sortedBackend" 
                  :key="item.name" 
                  class="flex items-center gap-4 p-3 hover:bg-[#1E1E1E] rounded-lg transition-colors bg-[#1E1E1E]/40 backdrop-blur-md border border-white/5"
                >
                  <div class="shrink-0">
                    <img :src="item.icon" :alt="item.name" class="w-10 h-10 object-contain" />
                  </div>
                  
                  <div class="flex flex-col gap-2 min-w-0"> 
                    <span class="font-semibold text-lg leading-tight truncate">
                      {{ item.name }}
                    </span>
                    <span 
                      class="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border transition-colors duration-300 whitespace-nowrap"
                      :class="getSkillColor(item.skill)"
                    >
                      {{ getSkillLabel(item.skill) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="sticky top-10 shrink-0"> 
                <div 
                  style="writing-mode: vertical-lr;" 
                  class="rotate-180 text-text-bright text-xl md:text-2xl font-medium tracking-wide whitespace-nowrap"
                >
                {{ $t('lang.skills.database') }} 	&#8592;
                </div>
              </div>

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-primary">
                <div 
                  v-for="item in sortedDatabase" 
                  :key="item.name" 
                  class="flex items-center gap-4 p-3 hover:bg-[#1E1E1E] rounded-lg transition-colors bg-[#1E1E1E]/40 backdrop-blur-md border border-white/5"
                >
                  <div class="shrink-0">
                    <img :src="item.icon" :alt="item.name" class="w-10 h-10 object-contain" />
                  </div>
                  
                  <div class="flex flex-col gap-2 min-w-0"> 
                    <span class="font-semibold text-lg leading-tight truncate">
                      {{ item.name }}
                    </span>
                    <span 
                      class="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border transition-colors duration-300 whitespace-nowrap"
                      :class="getSkillColor(item.skill)"
                    >
                      {{ getSkillLabel(item.skill) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex gap-4 items-start">
              <div class="sticky top-10 shrink-0"> 
                <div 
                  style="writing-mode: vertical-lr;" 
                  class="rotate-180 text-text-bright text-xl md:text-2xl font-medium tracking-wide whitespace-nowrap"
                >
                {{ $t('lang.skills.others') }} 	&#8592;
                </div>
              </div>

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-primary">
                <div 
                  v-for="item in sortedOthers" 
                  :key="item.name" 
                  class="flex items-center gap-4 p-3 hover:bg-[#1E1E1E] rounded-lg transition-colors bg-[#1E1E1E]/40 backdrop-blur-md border border-white/5"
                >
                  <div class="shrink-0">
                    <img :src="item.icon" :alt="item.name" class="w-10 h-10 object-contain" />
                  </div>
                  
                  <div class="flex flex-col gap-2 min-w-0"> 
                    <span class="font-semibold text-lg leading-tight truncate">
                      {{ item.name }}
                    </span>
                    <span 
                      class="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border transition-colors duration-300 whitespace-nowrap"
                      :class="getSkillColor(item.skill)"
                    >
                      {{ getSkillLabel(item.skill) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </UContainer>
    </section>
    <section class="mt-10">
      <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-20">
        <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">{{ $t('Projects.header') }}</h2>
        <p class="text-[#B0B0B0] text-justify leading-relaxed text-lg italic mb-4">{{ $t('Projects.paragraph') }}</p>
        
        <div class="flex flex-row gap-10">  
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="item in selectedProjects"
            :key="item.id || item.title"
            class="group flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#1E1E1E]/60 backdrop-blur-md transition-all duration-500"
          >
            <div class="relative overflow-hidden h-48 bg-[#111111]">
              <img
                v-if="item.pictures?.length"
                :src="`/images/${item.pictures[0]}`"
                :alt="$t(item.title_key)"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-[#333333]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-80"></div>
            </div>

            <div class="flex flex-col flex-1 gap-2 p-6">
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
                    class="w-4 h-4 object-contain"
                  />
                  <span class="text-[10px] uppercase tracking-wider font-semibold text-gray-400">{{ tech }}</span>
                </div>
              </div>

              <div class="flex mt-auto justify-between items-center w-full pt-4">
                <a
                  v-if="item.links?.github"
                  :href="item.links.github"
                  target="_blank"
                  class="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                <div v-else></div>

                <NuxtLink 
                  :to="localePath(`/projects/${item.id}`)" 
                  class="text-xs font-bold uppercase tracking-widest text-[#E0E0E0] hover:text-primary-500 transition-all relative group"
                >
                  {{ $t('Projects.moreText') }} &#8594;
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="flex justify-center mt-10">
            <NuxtLink 
              :to="localePath('/projekty')" 
              class="inline-flex items-center justify-center px-8 py-5 rounded-full bg-[#E0E0E0] text-[#111111] font-bold uppercase tracking-widest text-md hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {{ $t('Projects.buttonText') }} &#8594;
            </NuxtLink>
            
        </div>
         
      </UContainer>
   
    </section>
    <section class="bg-black/50 py-20">
      <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-10 mt-10">
        <div class="flex justify-center w-full">
          <div class="w-full md:w-[70%] lg:w-[60%] flex flex-col items-center text-center gap-6 bg-[#1E1E1E]/60 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-2xl transition-all duration-500 hover:border-white/10">
            
            <h2 class="text-primary text-2xl md:text-4xl font-medium tracking-wide">
              {{ $t('Contact.header') }}
            </h2>

            <p class="text-[#B0B0B0] leading-relaxed text-lg max-w-2xl">
              {{ $t('Contact.paragraph') }}
            </p>

            <div class="mt-4">
              <NuxtLink 
                :to="localePath('/kontakt')" 
                class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#E0E0E0] text-[#111111] font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {{ $t('Contact.buttonText') }} &#8594;
              </NuxtLink>
            </div>

          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import image from '~/assets/images/ja.webp'
import projektyData from '~/assets/json/projekty.json'
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

interface Projekt {
  id?: string | number
  title: string
  title_key: string
  desc_key: string
  description: string
  technologies: string[]
  pictures?: string[]
  links: {
    github?: string
    live?: string
  }
}

const data = ref<Projekt[]>(projektyData)

const selectedProjects = ref<Projekt[]>([])

onMounted(() => {
  selectedProjects.value = [...data.value]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
})

function myAge() {
  const today = new Date();
  const birthDate = new Date('2008-08-02');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age
}

interface SkillItem {
  name: string
  icon: string
  skill: number
}

const frontendSkills = ref<SkillItem[]>([
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    skill: 3
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    skill: 1
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    skill: 2
  },
  {
    name: 'Nuxt.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg',
    skill: 3
  },
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    skill: 4
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    skill: 4
  },
  {
    name: 'SCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    skill: 3
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    skill: 2
  },
  {
    name: 'JavaFX',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    skill: 1
  }
])

const backendSkills = ref<SkillItem[]>([
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    skill: 2
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    skill: 2
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    skill: 2
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    skill: 1
  },
  {
    name: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    skill: 2
  }
])

const databaseSkills = ref<SkillItem[]>([
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    skill: 2
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
    skill: 2
  },
  {
    name: 'PocketBase',
    icon: '/images/pocketbase.svg',
    skill: 1
  },
  {
    name: 'MariaDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg',
    skill: 2
  }
])

const othersSkills = ref<SkillItem[]>([
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    skill: 2
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    skill: 1
  },
  {
    name: 'Build Tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    skill: 2
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    skill: 2
  },
  {
    name: 'Unity',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    skill: 2
  },
  {
    name: 'GitHub',
    icon: '/images/github.svg',  
    skill: 2
  },
  {
    name: 'Photoshop',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg',
    skill: 2
  },
  {
    name: 'Illustrator',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg',
    skill: 2
  },
  {
    name: 'Aseprite',
    icon: '/images/Logo_Aseprite.svg', 
    skill: 2
  },
])
  
const getSkillLabel = (skill: number): string => {
  const key = [1, 2, 3, 4].includes(skill) ? skill : 'unknown'
  return t(`lang.skills.levels.${key}`)
}

const getSkillColor = (skill: number): string => {
  const colors: Record<number, string> = {
    1: 'text-gray-400 border-gray-500/30 bg-gray-500/10',       
    2: 'text-blue-400 border-blue-500/30 bg-blue-500/10',       
    3: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
    4: 'text-amber-400 border-amber-500/30 bg-amber-500/10'  
  }
  return colors[skill] || 'text-gray-500 border-gray-500/20'
}

const sortedFrontend = computed(() => {
  return [...frontendSkills.value].sort((a: SkillItem, b: SkillItem) => b.skill - a.skill)
})

const sortedBackend = computed(() => {
  return [...backendSkills.value].sort((a: SkillItem, b: SkillItem) => b.skill - a.skill)
})

const sortedDatabase = computed(() => {
  return [...databaseSkills.value].sort((a: SkillItem, b: SkillItem) => b.skill - a.skill)
})

const sortedOthers = computed(() => {
  return [...othersSkills.value].sort((a: SkillItem, b: SkillItem) => b.skill - a.skill)
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
  'GitHub':       '/images/github.svg',
  'ShaderLab':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
  'Pixel Art':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg'
}

const getTechIcon = (tech: string): string | null => {
  return techIconMap[tech] ?? null
}
</script>