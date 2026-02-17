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
              <UButton size="xl" color="primary" class="cursor-pointer" variant="solid" :label="$t('nav.projects')" />
              <UButton size="xl" color="primary" class="cursor-pointer" variant="solid" :label="$t('nav.contact')" />
            </div>
          </div>

          <div class="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative group">
              <div class="absolute -inset-4 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-500"></div>
              
            <div class="group relative w-64 h-64 md:w-120 md:h-120 overflow-hidden rounded-full border-2 border-[#333333] hover:border-primary-500 transition-all duration-500 shadow-2xl">
                <img 
                  src="/images/ja.jpg" 
                  alt="David Hrbáček" 
                  class="w-full h-full object-top object-cover transition-all duration-700 scale-105 group-hover:scale-110 grayscale-0 [@media(hover:hover)]:grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>

        </div>
      </UContainer>
    </section>
    <section>
       <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-20">
          <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">{{ $t('lang.header') }}</h2>
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

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-gray-200">
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

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-gray-200">
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

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-gray-200">
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

              <div class="flex-1 border-l grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 border-gray-200">
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
    <section>
      <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-20">
        <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">{{ $t('Projects.header') }}</h2>
      </UContainer>
   
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

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
    skill: 3
  },
  {
    name: 'Nuxt.js',
    icon: 'https://nuxt.com/favicon.ico',
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
    name: 'SASS',
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
  /*
  {
    name: 'Rust',
    icon: '/images/rust.svg',
    skill: 1
  },*/
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
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    skill: 1
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
    skill: 3
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
    skill: 3
  }
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


</script>