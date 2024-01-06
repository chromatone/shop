<script setup>
import { data } from '../../db/shop.data'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template lang='pug'>
.flex.flex-col.gap-16
  .flex.flex-col.items-stretch.border-l-16.relative.flex-1.items-start(
    v-for="(category,c,t) in data?.categories", 
    :key="category", 
    v-bind="category", 

    :style="{borderColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
    )
    a.flex.flex-col.items-stretch.p-4.shadow.hover-shadow-lg.transition.mx-4(
      :href="`/${category?.slug}/`"
      :style="{backgroundColor: `oklch(${isDark ? 60 : 92}% .07 ${c*360/data?.categories.length})`}"
      )

      .text-4xl.p-4.font-bold {{ category?.title }}
      .text-md.px-4.mb-4.max-w-130 {{ category?.description }}
    .text-8xl.absolute.top-2.right-2.opacity-10.hover-opacity-80.hover-scale-110
      .i-ri-download-cloud-fill(v-if="category?.digital")
      .i-mdi-email-newsletter(v-else)

    .flex.flex-wrap.gap-4.p-4
      ProductCard(
        style="flex:1 1 280px"
        v-for="product in [...category.products].sort((a,b)=>a.sort>b.sort ? 1 : -1)", :key="product", v-bind="product"
        )
</template>