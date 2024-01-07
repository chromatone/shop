<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'

import { data } from '../db/shop.data'
import { count } from '../composables/cart'
import { computed } from 'vue';
const { docs } = data

const { isDark, frontmatter: f } = useData()

const route = useRoute()

const pageColor = computed(() => `oklch(${isDark.value ? 60 : 92}% .07 ${((f.value?.sort || 1) - 1) * 360 / data?.categories.length})`)

</script>

<template lang="pug">
.flex.flex-col.bg-light-500.dark-bg-dark-100.dark-text-light-500.min-h-100dvh.site.gap-0.items-stretch
  .sticky.top-0.z-20.flex.w-full.items-center.gap-2.p-4
    a.opacity-60.hover-opacity-100.transition(href="/") shop
    a.p-0.opacity-40.hover-opacity-100.transition(href="https://chromatone.center" target="_blank") chromatone.center
    .flex-auto
    .cursor-pointer.mt-2px.opacity-30.hover-opacity-80(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-carbon-moon(v-else)
  .w-full.flex.flex-col.items-start
    .flex.items-center.gap-4.mt-6.mb-6
      a(href="/") 
        img.w-20.sm-w-30.ml-4(src="/logo.svg")
      .flex.flex-col.gap-2
        .flex.flex-wrap.items-end.gap-2.capitalize
          a.text-4xl.font-bold(href="/") Chromatone
          a.text-md.opacity-40(:href="`/${f?.category?.slug || f?.page_type}/`") {{ f?.category?.title || f?.page_type }}
        .text-3xl {{ f.title }}

    .p-6.text-18px.border-l-16.bg-light-200.dark-bg-dark-300.shadow-sm.mx-4.max-w-150(
      v-if="f?.description"
      :style="{borderColor:pageColor}"
    ) {{ f.description }}

    .w-full.flex.flex-col.markdown-body.mt-8.px-4
      content

  a.flex.flex-wrap.gap-2.rounded.mt-8.shadow-md.hover-shadow-lg.transition.px-2.max-w-140.mx-4(
    v-if="count && route.path != '/cart/'" 
    href="/cart/"
    :style="{backgroundColor: `oklch(${isDark ? 60 : 80}% .16 ${340} / .5)`}"
    )
    .px-4.relative.py-4.flex.items-center.justify-center.w-full.gap-4()
      .i-tabler-shopping-cart-check.text-xl
      .text-xl.uppercase.flex-auto.font-bold Proceed to cart
      ShopCartIcon.text-lg.left-6

  .flex-auto
  a.flex.items-center.font-bold.gap-4.items-start.ml-10.my-6(href="/")
    img.w-10(src="/logo.svg")
    .text-xl Chromatone

  //- .flex.items-center.flex-wrap.p-2.mx-auto.gap-2
    .p-1.bg-light-100 Chromatone 
    .p-1.bg-light-100 Shop 
    .p-1.bg-light-100(v-if="f?.category") {{ f?.category?.title }}
    .p-1.bg-light-100 {{ f?.title }}
  .flex.flex-wrap.gap-2.max-w-150.text-sm.justify-start.p-0.mx-8
    a.p-1.opacity-40.hover-opacity-80.transition(
      v-for="doc in docs" :key="doc"
      :href="`/docs/${doc.slug}/`"
      ) {{ doc.title }}
  .flex.flex-wrap.gap-2.text-sm.justify-start.p-4.m-6
    a.opacity-30.hover-opacity-80(href="mailto:support@chromatone.center") support@chromatone.center
</template>

<style lang="postcss">
.markdown-body {
  p {
    @apply max-w-140 my-4
  }
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