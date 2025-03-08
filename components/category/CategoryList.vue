<script setup>
import ProductCard from '../product/ProductCard.vue';
import { data } from '../../db/shop.data'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template lang='pug'>
.flex.flex-col.gap-16
  .flex.flex-col.relative.flex-1.items-start.gap-8(
    v-for="(category, c, t) in data?.categories", 
    :key="category", 
    v-bind="category", 
    :style="{ borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c * 360 / data?.categories.length})` }"
    )
    a.w-full.flex.flex-col.relative.items-stretch.p-2.shadow.hover-shadow-lg.transition.rounded-2xl.shadow.backdrop-blur(
      :href="`/${category?.slug}/`"
      :style="{ backgroundColor: `oklch(${isDark ? 60 : 92}% .05 ${c * 360 / data?.categories.length} / .8)` }"
      )

      .text-4xl.p-4 {{ category?.title }}
      .text-md.px-4.mb-4.max-w-130 {{ category?.description }}
      .text-8xl.absolute.top-2.right-6.opacity-10.pointer-events-none
        .i-ri-download-cloud-fill(v-if="category?.digital")
        .i-mdi-email-newsletter(v-else)

    .flex.flex-col.gap-6.w-full
      ProductCard(
        v-for="product in [...category.products].sort((a, b) => a.sort > b.sort ? 1 : -1)", 
        :key="product", 
        v-bind="product"
        )
</template>