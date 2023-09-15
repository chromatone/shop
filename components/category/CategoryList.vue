<script setup>
import { data } from '../../db/shop.data'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8
  a.border-l-16.relative.p-8.bg-light-300.flex-1.flex.items-center.shadow.hover-shadow-md.transition.hover-bg-light-200.dark-bg-dark-300.hover-dark-bg-dark-300(
    v-for="(category,c,t) in data?.categories", 
    :key="category", 
    v-bind="category", 
    :href="`/${category?.slug}/`"
    :style="{borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
    )
    //- img.max-w-100(:src="`/categories/${category.slug}.webp`")
    .text-3xl {{ category?.title }}

</template>