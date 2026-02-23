<script setup>
const title = 'David Hrbacek Portfolio'
const description = 'Portfolio of David Hrbacek'
const siteUrl = 'https://www.davidhrbacek.dev/' 

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [{ rel: 'icon', href: '/logo.svg' }],
  htmlAttrs: { lang: 'cs' }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/logo.svg`,
  twitterImage: `${siteUrl}/logo.svg`,
  twitterCard: `${siteUrl}/images/ja.jpg`, 
})
</script>

<template>
  <Background />
  <NavbarPanel />
  <NuxtPage />
  <UToaster />
  <Footer />
</template>
