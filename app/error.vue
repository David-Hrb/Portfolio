<template>
  <section class="min-h-screen flex items-center justify-center p-4">
    <UContainer class="max-w-4xl w-full">
      <div class="relative group flex flex-col items-center text-center">
        <div class="absolute -inset-10 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>

        <div class="relative space-y-8">
          <h1 class="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none m-0"> 
              {{ error.statusCode }}
          </h1>

          <div class="glass-card p-8 md:p-12 rounded-3xl border border-[#333333] max-w-2xl mx-auto shadow-2xl">
            <h2 class="text-2xl md:text-3xl font-medium text-primary-500 mb-4">
              <code>&lt;/&gt;</code> 
              {{ error.statusCode === 404 ? $t('error.title404') : $t('error.titleGeneric') }}
            </h2>
            
            <p class="text-[#B0B0B0] text-lg leading-relaxed mb-8">
              {{ error.statusCode === 404 ? $t('error.message') : (error.message || $t('error.titleGeneric')) }}
            </p>

            <div class="flex flex-wrap gap-4 justify-center">
              <button 
                @click="handleError"
                class="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold uppercase border border-[#333333] tracking-widest text-sm rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {{ $t('error.backButton') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const localePath = useLocalePath()

const handleError = () => clearError({ redirect: localePath('/') })
</script>

<style scoped>
.glass-card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
}
</style>