<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-[50] transition-all duration-500',
      isScrolled ? 'py-3' : 'py-5'
    ]"
  >
    <UContainer>
      <div 
        :class="[
          'mx-auto max-w-5xl transition-all duration-500 border backdrop-blur-md',
          isScrolled 
            ? 'bg-[#1E1E1E]/90 border-[#333333] shadow-2xl rounded-full px-6 py-2 md:py-3' 
            : 'bg-[#1E1E1E]/40 border-transparent rounded-full px-6 md:px-8 py-3 md:py-4'
        ]"
      >
        <div class="flex justify-between items-center">
          <NuxtLink 
            :to="localePath('/')" 
            class="text-lg md:text-2xl font-bold tracking-tighter text-[#E0E0E0] hover:text-primary-500 transition-all duration-300"
          >
            David Hrbáček
          </NuxtLink>
          
          <div class="hidden md:flex items-center gap-6 lg:gap-10">
            <ul class="flex gap-4 lg:gap-8 list-none m-0 p-0">
              <li v-for="link in navLinks" :key="link.path">
                <NuxtLink 
                  :to="localePath(link.path)" 
                  class="text-sm font-medium uppercase tracking-widest text-[#E0E0E0] hover:text-primary-500 transition-all relative group"
                >
                  {{ link.name }}
                  <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary-500 transition-all duration-300 group-[.router-link-active]:w-full group-hover:w-full"></span>
                </NuxtLink>
              </li>
            </ul>

            <div class="flex gap-2 border-l border-[#333333] pl-6">
              <button 
                v-for="lang in locales" 
                :key="lang.code"
                @click="setLocale(lang.code)"
                :class="[
                  'text-xs font-bold transition-colors px-2 py-1 rounded  cursor-pointer',
                  locale === lang.code ? 'text-primary-500' : 'text-[#888888] hover:text-[#E0E0E0]'
                ]"
              >
                {{ lang.code.toUpperCase() }}
              </button>
            </div>
          </div>

          <div class="md:hidden flex items-center gap-4">
            <button @click="setLocale(locale === 'cs' ? 'en' : 'cs')" class="text-xs font-bold text-[#E0E0E0]"> 
              {{ locale === 'cs' ? 'EN' : 'CS' }}
            </button>

            <UButton
              variant="ghost"
              :icon="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
              class="text-2xl text-[#E0E0E0]"
              @click="isMobileMenuOpen = !isMobileMenuOpen" 
            />
          </div>
        </div>
      </div>
    </UContainer>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="absolute top-full left-4 right-4 mt-2 md:hidden"
      >
        <div class="bg-[#1E1E1E]/95 border border-[#333333] backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
          <ul class="flex flex-col gap-6 list-none m-0 p-0">
            <li v-for="link in navLinks" :key="link.path">
              <NuxtLink 
                :to="localePath(link.path)" 
                class="text-lg font-semibold uppercase tracking-widest text-[#E0E0E0] block w-full"
                @click="isMobileMenuOpen = false"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">

// i18n composables
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Navigace jako computed, aby reagovala na změnu jazyka t()
const navLinks = computed(() => [
  { name: t('nav.about'), path: '/' },
  { name: t('nav.projects'), path: '/projekty' },
  { name: t('nav.blog'), path: '/projekty' },
  { name: t('nav.contact'), path: '/projekty' }
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>