<script setup>
import { data } from '../../db/shop.data'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template lang='pug'>
.flex.flex-wrap.gap-4.p-4
  a.flex.flex-col.rounded.relative.bg-light-300.flex-1.items-start.shadow.hover-shadow-xl.transition.hover-bg-light-200.dark-bg-dark-300.hover-dark-bg-dark-200(
    style="flex: 1 1 180px"
    v-for="(category,c,t) in data?.categories", 
    :key="category", 
    v-bind="category", 
    :href="`/${category?.slug}/`"
    :style="{backgroundColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
    )
    //- img.max-w-100(:src="`/categories/${category.slug}.webp`")
    //- .border-8.w-full.flex.flex-col.items-center(
    //-   :style="{borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
    //-   )
    //- img(:src="`/categories/${category.slug}.webp`")
    .text-xl.p-2 {{ category?.title }}
    //- .text-sm.px-2.mb-2 {{ category?.description }}
    //- .text-8xl.absolute.bottom-2.right-2.opacity-10.hover-opacity-80.hover-scale-110
    //-   .i-ri-download-cloud-fill(v-if="category?.digital")
    //-   .i-mdi-email-newsletter(v-else)

</template>