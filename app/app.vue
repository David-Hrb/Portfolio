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
  ogImage: '/logo.svg',
  twitterImage: '/logo.svg',
  twitterCard: '/logo.svg'
})
</script>

<template>
  <Background />
  <NavbarPanel />
  <NuxtPage />
  <UToaster />
  <Footer />
</template>
