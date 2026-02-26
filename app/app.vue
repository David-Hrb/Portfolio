<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
const title = 'David Hrbáček | Programátor'
const description = 'Portfolio programátora Davida Hrbáčka se zaměřením na moderní webové aplikace, hry a desktopové aplikace. Podívejte se na mé projekty.'
const siteUrl = 'https://www.davidhrbacek.dev' 

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'David Hrbáček' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ 
    rel: 'icon', 
    href: '/logo.ico', 
    sizes: 'any',
    type: 'image/x-icon' 
  }],
  htmlAttrs: { lang: 'cs' }
})

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og-image.jpg`, 
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/og-image.jpg`,
})
</script>

<template>
  <Background />
  <NavbarPanel />
  <NuxtPage />
  <UToaster />
  <Footer />
  <Analytics/>
</template>
