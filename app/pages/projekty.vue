<template>
  <!--
    <UContainer class="max-w-6xl w-[90%] md:w-[80%] mb-20">
        <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">{{ $t('Projects.header') }}</h2>
        <div class="flex flex-row gap-10">  
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                v-for="item in data"
                :key="item.title"
                class="group flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#1E1E1E]/60 backdrop-blur-md shadow-xl hover:border-primary-500/40 hover:shadow-primary-500/10 transition-all duration-500"
              >

                <div class="relative overflow-hidden h-48 bg-[#111111]">
                  <img
                    v-if="item.pictures?.length"
                    :src="`/images/${item.pictures[0]}`"
                    :alt="item.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center text-[#333333]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
    
                  <div class="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-80"></div>
                </div>

 
                <div class="flex flex-col flex-1 gap-4 p-6">
                  <h3 class="text-xl font-bold text-[#E0E0E0] group-hover:text-primary-400 transition-colors duration-300">
                    {{ item.title }}
                  </h3>

                  <p class="text-[#B0B0B0] text-sm leading-relaxed flex-1">
                    {{ item.description }}
                  </p>

        
                  <div class="flex flex-wrap gap-2 pt-2">
                    <div
                      v-for="tech in item.technologies"
                      :key="tech"
                      class="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                    >
                      <img
                        :src="getTechIcon(tech)"
                        :alt="tech"
                        class="w-4 h-4 object-contain"
                        @error="(e) => (e.target as HTMLImageElement).style.display = 'none'"
                      />
                      <span class="text-[10px] uppercase tracking-wider font-semibold text-gray-400">{{ tech }}</span>
                    </div>
                  </div>

            
                  <div v-if="item.links?.github" class="flex gap-3 pt-2">
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
                  </div>
                </div>
              </div>
            </div>  
        </div>
      </UContainer>
      -->
</template>