<template>
  <footer class="bg-[#1E1E1E] w-full">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">
        
        <div class="flex-1">
          <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">
            {{ $t('Footer.header') }}
          </h2>
          <p class="text-[#B0B0B0] mt-4 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            {{ $t('Footer.description') }}
          </p>
        </div>

        <div class="flex-1 flex flex-col items-center md:items-end">
          <h2 class="text-[#E0E0E0] text-2xl md:text-3xl font-medium tracking-wide">
            {{ $t('Footer.connectMe') }}
          </h2>
          <div class="flex flex-wrap gap-6 justify-center md:justify-end mt-6">
            <a 
              href="https://github.com/David-Hrb" 
              target="_blank" 
              class="group flex items-center gap-2 text-sm font-semibold text-[#B0B0B0] hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.26.825-.58 0-.285-.01-1.04-.015-2.04-3.34.725-4.04-1.61-4.04-1.61-.545-1.385-1.33-1.755-1.33-1.755-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49 .995 .11-.775 .42-1.305 .765-1.605 -2.665-.305 -5.467-1.335 -5.467-5.935 0 -1.31 .465 -2.38 1.235 -3.22 -.125-.305 -.535 -1.535 .115 -3.195 0 0 1.005 -.32 3.295 1.23a11.48 11.48 0 013 -.405c1 .005 2 .135 3 .405 2.29 -1.55 3.295 -1.23 3.295 -1.23 .655 1.66 .245 2.89 .12 3.195 .77 .84 1.235 1.91 1.235 3.22 0 4.61 -2.805 5.625 -5.475 5.92 .43 .37 .815 1.105 .815 2.225v3.295c0 .315 .215 .685 .825 .57C20 23.5 24 18.5 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            
            <a 
              href="https://www.linkedin.com/in/david-hrb%C3%A1%C4%8Dek-6113633b0/" 
              target="_blank" 
              class="group flex items-center gap-2 text-sm font-semibold text-[#B0B0B0] hover:text-white transition-all duration-200"
            >
              <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 128 128">
                <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
              </svg>
              LinkedIn
            </a>

            <button 
              @click="copyEmail"
              class="group cursor-pointer flex items-center gap-2 text-sm font-semibold text-[#B0B0B0] hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              Gmail
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-[#333333] text-center">
        <p class="text-sm text-gray-400 mb-2">
          © {{ new Date().getFullYear() }} David Hrbáček. {{ $t('Footer.rights') }}
        </p>
        <p class="text-xs text-gray-500 italic">{{ $t('Footer.design') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const toast = useToast() 

const copyEmail = () => {
  const email = 'hrbacekdavid.it@gmail.com'
  
  navigator.clipboard.writeText(email).then(() => {
    toast.add({
      title: t('Footer.emailCopied'),
      description: email,
      icon: 'i-heroicons-check-circle', 
      color: 'primary', 
      timeout: 3000     
    })
  }).catch(() => {
    toast.add({
      title: 'Chyba',
      description: 'E-mail se nepodařilo zkopírovat.',
      color: 'red'
    })
  })
}
</script>