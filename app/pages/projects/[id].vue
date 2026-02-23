<script setup>
import projectsData from '~/assets/json/projekty.json'

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const projectId = route.params.id
const project = projectsData.find(p => p.id === projectId)

if (!project) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Projekt nebyl nalezen',
    fatal: true 
  })
}

useSeoMeta({
  title: () => t(project.title_key),
  description: () => t(project.desc_key)
})
</script>

<template>
  <main v-if="project" class="min-h-screen mt-32 text-white p-8">
    <div class="max-w-4xl mx-auto">
      <NuxtLink 
        :to="localePath('/')" 
        class="text-md md:text-lg font-bold tracking-tighter text-[#E0E0E0] hover:text-primary-500 transition-all duration-300"
        >
        ← {{ $t('Projects.backToList') || 'Zpět' }}
      </NuxtLink>
      
      <h1 class="text-5xl font-black mb-4 uppercase tracking-tighter">
        {{ $t(project.title_key) }}
      </h1>
      
      <p class="text-xl text-gray-400 mb-8 leading-relaxed">
        {{ $t(project.desc_key) }}
      </p>
      
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
        <h2 class="text-sm uppercase tracking-widest text-gray-500 mb-4">Technologie</h2>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="px-3 py-1 bg-white/10 rounded-full text-sm font-medium border border-white/5"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <img 
          v-for="pic in project.pictures" 
          :key="pic" 
          :src="`/images/${pic}`" 
          :alt="project.id"
          class="rounded-xl w-full object-cover border border-white/10 shadow-2xl" 
        />
      </div>

      <div v-if="project.links?.github" class="mt-12 text-center">
        <a 
          :href="project.links.github" 
          target="_blank" 
          class="inline-block px-8 py-4 bg-primary-500 text-black font-bold rounded-full hover:bg-primary-400 transition-colors"
        >
          View Source on GitHub
        </a>
      </div>
    </div>
  </main>
</template>