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
})

</script>

<template lang='pug'>
.overflow-hidden.flex.flex-col.shadow-lg.hover-shadow-xl.transition.flex-1.dark-bg-dark-300.bg-light-400.rounded(
  :style="{borderColor:`oklch(${isDark ? 60 : 92}% .07 ${sort*360/data?.products.length})`}"
  :href="`/${category?.slug}/${slug}/`" 
  style=" flex: 1 1 auto" 
  :class="{'border-10':!!cart[stripe_id], 'border-5':!cart[stripe_id] }"
  )
  a(:href="`/${category?.slug}/${slug}/`")
    .p-0.min-w-50.relative(style="flex: 0 0 ")
      img(
        style="margin:0"
        :src="`/products/${slug}.webp`")
    .flex.flex-col.p-4.gap-2(style="flex: 1 1 100px")
      .text-2xl.font-bold.items-center.gap-2 {{ title }}
      .text-md.leading-normal {{ description }}
  slot 
  shop-price.w-full(
    v-bind="props"
    :color="`oklch(${isDark ? 60 : 92}% .07 ${sort*360/data?.products.length})`"
    )
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>