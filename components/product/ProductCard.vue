<script setup>
import { data } from '../../db/shop.data'

import { cart, addToCart } from '../../composables/cart'
import { useData } from 'vitepress';

const { isDark } = useData()

const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  url: { type: String, default: '' },
  cover: { type: String, default: '' },
  slug: { type: String, default: '' },
  price: { type: Number, default: '' },
  stripe_id: { type: String, default: '' },
  category: { type: Object, default: () => ({}) },
  digital: { type: Boolean, default: false },
  sort: { type: Number, default: '' },
  material: { type: Array, default: () => ['VINYL'] },
})

</script>

<template lang='pug'>
.overflow-hidden.flex.flex-col.shadow.hover-shadow-lg.transition.flex-1.dark-bg-dark-300.bg-light-400.rounded-2xl.max-w-42ch.p-2.border-2px(
  :href="`/${category?.slug}/${slug}/`" 
  )
  a.flex-auto.flex.flex-col.items-start(

    :href="`/${category?.slug}/${slug}/`")
    .p-0.min-w-50.relative.max-h-70.overflow-hidden.rounded-xl
      img(
        style="margin:0"
        :src="`/products/${slug}.webp`")
    .flex.flex-col.p-4.gap-2(style="flex: 1 1"

      )
      .text-2xl.items-center.gap-2 {{ title }}
      .text-md.leading-normal {{ description }}

    slot 
  shop-price.w-full(
    :style="{backgroundColor:`oklch(${isDark ? 60 : 92}% .04 ${sort*360/data?.products.length} / .2)`}"
    v-bind="props"
    :color="`oklch(${isDark ? 60 : 92}% .12 ${sort*360/data?.products.length})`"
    )
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>