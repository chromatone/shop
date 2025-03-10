<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'

import { data } from './db/shop.data'
import { count, open } from './composables/cart'
import { computed, watch, ref, onMounted } from 'vue';
import ShopCartIcon from './components/shop/ShopCartIcon.vue';
import CategoryListSmall from './components/category/CategoryListSmall.vue';
import ShopCart from './components/shop/ShopCart.vue'
import { useData, useRoute } from 'vitepress';


const { docs } = data

const { isDark, frontmatter: f } = useData()

const route = useRoute()

const pageColor = computed(() => `oklch(${isDark.value ? 60 : 92}% .07 ${((f.value?.sort || 1) - 1) * 360 / data?.categories.length})`)

const cartDialog = ref()

onMounted(() => {
  watch(open, o => o ? cartDialog.value.showModal() : cartDialog.value.close(), { immediate: true })

  cartDialog.value.addEventListener('click', e => {
    if (e.target === cartDialog.value) {
      cartDialog.value.close()
      open.value = false
    }
  })
})


</script>

<template lang="pug">
.flex.flex-col.min-h-100dvh.site.gap-0.items-stretch.bg-cover.dark-text-light-400.bg-stone-300.dark-bg-dark-500
  //- .mx-2.max-w-75ch.w-full.mx-auto.fixed.top-2.z-20.flex.items-center.gap-2.py-2.px-4.dark-bg-dark-300.dark-bg-op-40.bg-light-300.m-2.rounded-xl.shadow.bg-op-80.backdrop-blur-lg
    a.opacity-60.hover-opacity-100.transition(href="/") shop
    a.p-0.opacity-40.hover-opacity-100.transition(href="https://chromatone.center" target="_blank") chromatone.center
    .flex-auto
    a.flex.items-center.gap-2.bg-stone-600.px-2.py-1.rounded-xl.shadow.hover-shadow-lg.text-light-800.dark-bg-light-800.dark-text-dark(
      :style="{ backgroundcolor: `oklch(${isDark ? 90 : 80}% .17 ${130} / .9)` }"
      v-if="count && route.path != '/cart/'" 
      href="/cart/")
      .i-ph-envelope-open.text-xl
      .text-md YOUR CART
      ShopCartIcon.text-lg

  .max-w-75ch.mx-auto.w-full.flex.flex-col.items-start
    .flex.items-center.gap-4.mt-6.mb-6.w-full
      a(href="/") 
        img.w-20.sm-w-30.ml-4(src="/logo.svg")
      .flex.flex-col.gap-2
        .flex.flex-wrap.items-end.gap-2.capitalize
          a.text-4xl.font-bold(href="/") Chromatone
          a.text-md.opacity-40(:href="`/${f?.category?.slug || f?.page_type}/`") {{ f?.category?.title || f?.page_type }}
        .text-3xl {{ f.title }}

    .cursor-pointer.fixed.top-4.right-4.mt-2px.opacity-30.hover-opacity-80(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-carbon-moon(v-else)

    .rounded-xl.p-6.text-md.bg-light-200.dark-bg-dark-300.shadow-sm.mx-4(
      v-if="f?.description"
      ) {{ f.description }}

    .w-full.flex.flex-col.markdown-body.px-4.my-4
      content

    dialog.dark-bg-dark-300.dark-text-light.max-h-80vh.rounded-2xl.overscroll-none(ref="cartDialog")
      h1.text-2xl.p-4.sticky.top-0.z-100.bg-light-400.dark-bg-dark-100 Your cart
      ShopCart

    //- a.mx-auto.flex.flex-wrap.items-center.gap-3.transition.shadow-xl.rounded-xl.p-2.bg-stone-700.dark-bg-light-800.dark-text-dark.text-light(
    //-   :style="{ backgroundcolor: `oklch(${isDark ? 90 : 80}% .17 ${130} / .9)` }"
    //-   v-if="count && route.path != '/cart/'" 
    //-   href="/cart/")
    //-   .i-ph-envelope-open.text-2xl
    //-   .text-md PROCEED TO CART
    //-   ShopCartIcon

  .max-w-75ch.mx-auto.flex.flex-col.bg-light-700.mt-12.dark-bg-dark-500.rounded-xl.overflow-hidden.m-4(v-if="f?.layout != 'pure'")

    CategoryListSmall.m-4

    .flex.items-center.gap-4.p-4
      a.flex.items-center.gap-4.items-start(href="/")
        img.w-10(src="/logo.svg")
        .text-xl.flex-1.flex.gap-2
          .font-bold Chromatone 
          .p-0 Shop
      .flex-1
      a.opacity-30.hover-opacity-80.text-sm(href="mailto:support@chromatone.center") Contact Us

  .flex.flex-wrap.gap-2.text-md.justify-center.flex-1.bg-light-900.p-4.dark-bg-dark-900
    a.p-1.opacity-40.hover-opacity-80.transition(
      v-for="doc in docs" :key="doc"
      :href="`/docs/${doc.slug}/`"
      :class="{ 'font-bold': route.path == `/docs/${doc.slug}/` }"
      ) {{ doc.title }}


</template>

<style lang="postcss">
html {
  overscroll-behavior-y: none
}

dialog::backdrop {
  @apply backdrop-blur bg-light-400/30 dark-bg-dark-400/30
}

html:has(dialog[open]) {
  overflow: hidden;
}

.info.custom-block {
  @apply bg-stone-200 dark-bg-stone-800 rounded-xl shadow p-4 my-4;

  & .custom-block-title {
    @apply text-3xl
  }
}

.markdown-body {
  p {
    @apply max-w-140 my-4
  }
}

.markdown-body p>img {
  @apply rounded-2xl my-16;
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