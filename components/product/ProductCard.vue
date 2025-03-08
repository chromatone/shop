<script setup>
import { data } from '../../db/shop.data'

import { cart, addToCart } from '../../composables/cart'
import { useData } from 'vitepress';
import ShopPrice from '../shop/ShopPrice.vue';

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
.overflow-hidden.flex.flex-wrap.shadow.hover-shadow-lg.transition.dark-bg-dark-300.bg-stone-200.bg-op-90.backdrop-blur.items-stretch.rounded-2xl
  a.flex-auto.flex.flex-col(
    style="flex: 1 1 50%"
    :href="`/${category?.slug}/${slug}/`")

    .min-w-50.max-h-120.min-h-70.relative.overflow-hidden.bg-cover.bg-center.h-full.w-full(
      :style="{ backgroundImage: `url(/products/${slug}.webp)` }"
      )
      //- img(
      //-   style="margin:0"
      //-   :src="`/products/${slug}.webp`")
  .flex.flex-col.gap-2(style="flex: 1 1 300px")
    a.flex.flex-col.gap-4.p-4(:href="`/${category?.slug}/${slug}/`")
      .text-2xl.items-center.gap-2 {{ title }}
      .text-md.leading-normal {{ description }}
      slot 
    .flex-1
    ShopPrice.m-1(
      :style="{ backgroundColor: `oklch(${isDark ? 60 : 92}% .04 ${sort * 360 / data?.products.length} / .2)` }"
      v-bind="props"
      :color="`oklch(${isDark ? 60 : 82}% .12 ${sort * 360 / data?.products.length})`"
      )
</template>

<style scoped>
a {
  text-decoration: none;
  font-weight: unset;
}
</style>