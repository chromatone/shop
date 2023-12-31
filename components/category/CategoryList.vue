<script setup>
import { data } from '../../db/shop.data'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8
  a.border-4.relative.bg-light-300.flex-1.flex.flex-col.items-center.shadow.hover-shadow-md.transition.hover-bg-light-200.dark-bg-dark-300.hover-dark-bg-dark-200(
    v-for="(category,c,t) in data?.categories", 
    :key="category", 
    v-bind="category", 
    :href="`/${category?.slug}/`"
    :style="{borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
    )
    //- img.max-w-100(:src="`/categories/${category.slug}.webp`")
    img(:src="`/categories/${category.slug}.webp`")
    .text-3xl.p-4 {{ category?.title }}
    .i-ri-download-cloud-fill.text-5xl.absolute.bottom-2.right-2.opacity-20.hover-opacity-40.hover-scale-110(v-if="category?.digital")
    .i-mdi-email-newsletter.text-5xl.absolute.bottom-2.right-2.opacity-20.hover-opacity-40.hover-scale-110(v-else)

</template>