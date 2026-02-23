<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/logo.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'David Hrbacek Portfolio'
const description = 'Portfolio of David Hrbacek'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <Background />
  <NavbarPanel />
  <NuxtPage />
  <UToaster />
  <Footer />
</template>
