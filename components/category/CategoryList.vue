<script setup>
import { data } from '../../db/shop.data'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8
  a.border-8.relative.bg-light-300.flex-1.flex.flex-col.items-center.shadow.hover-shadow-xl.transition.hover-bg-light-200.dark-bg-dark-300.hover-dark-bg-dark-200.max-w-120(
    style="flex: 1 1 280px"
    v-for="(category,c,t) in data?.categories", 
    :key="category", 
    v-bind="category", 
    :href="`/${category?.slug}/`"
    :style="{borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
    )
    //- img.max-w-100(:src="`/categories/${category.slug}.webp`")
    .border-b-8.w-full.flex.flex-col.items-center(
      :style="{borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
      )
      img(
        :src="`/categories/${category.slug}.webp`"
      )
    .text-3xl.p-4 {{ category?.title }}
    .text-md.px-4.mb-4 {{ category?.description }}
    .text-8xl.absolute.bottom-2.right-2.opacity-10.hover-opacity-80.hover-scale-110
      .i-ri-download-cloud-fill(v-if="category?.digital")
      .i-mdi-email-newsletter(v-else)

</template>