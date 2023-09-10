<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'

import { data } from '../db/shop.data'

const { docs } = data

const { isDark, frontmatter: f } = useData()

const route = useRoute()
</script>

<template lang="pug">
.flex.flex-col.bg-light-500.dark-bg-dark-100.text-center.dark-text-light-500.min-h-100dvh.site.items-center.gap-8.px-4
  .fixed.top-0.z-20.flex.w-full
    .p-2.absolute.top-2.right-2.cursor-pointer(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-carbon-moon(v-else)
    a.p-2.flex.items-center.gap-2(href="https://chromatone.center" target="_blank") 
      .i-la-arrow-left.mt-1
      .p-0 chromatone.center

  a.flex.flex-col.gap-4.items-center.mt-16(href="/")
    img.w-30(src="/logo.svg")
  .flex.flex-col.markdown-body.max-w-150
    .text-4xl.mb-6 {{ f.title }}
    transition(name="fade")
      content(:key="route.path")
  .flex.flex-wrap.gap-2
    a.text-5xl.relative(href="/cart/" v-if="!route.path.includes('/cart/')")
      .i-la-shopping-cart
      ShopCartIcon
  a.flex.flex-col.gap-4.items-center.my-6(href="/")
    img.w-10(src="/logo.svg")
  .flex.flex-wrap.gap-2.max-w-150.text-sm.justify-center.p-4
    a.p-1.opacity-40.hover-opacity-80.transition(
      v-for="doc in docs" :key="doc"
      :href="`/docs/${doc.slug}/`"
      ) {{ doc.title }}
  
</template>

<style lang="postcss">
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}

html {
  @apply bg-light-500;
}

html.dark {
  @apply bg-dark-100;
}

:root {
  --font-family-base: "Commissioner", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  --font-family-mono: "Fira Code", source-code-pro, Menlo, Monaco, Consolas,
    "Courier New", monospace;
}

.site {
  font-family: var(--font-family-base);
}

@font-face {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-regular.woff2") format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-regular.woff") format("woff");
  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 700;
  src: local(""),
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-700.woff2") format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-700.woff") format("woff");
  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

.markdown-body {
  line-height: 1.6;
}

.markdown-body h1 {
  font-size: 3em;
  padding-bottom: 0.3em;
}

.markdown-body h2 {
  font-size: 1.5em;
  @apply py-4;
}

.markdown-body h3 {
  font-size: 1.2em;
  @apply py-2;
}

.markdown-body ul,
.markdown-body ol {
  padding-left: 2em;
}

.markdown-body blockquote {
  margin: 0;
  padding-left: 3em;
  border-left: 0.5em #eee solid;
}

.markdown-body code {
  padding: 0.2em 0.5em;
  margin: 0;
  font-family: monospace;
  font-size: 90%;
  border-radius: 3px;
}
</style>