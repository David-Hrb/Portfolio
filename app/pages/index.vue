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
</script>