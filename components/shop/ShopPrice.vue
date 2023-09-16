<script setup>
import { cart, addToCart } from '../../composables/cart'
import { useRoute, useData } from 'vitepress';
import { data } from '../../db/shop.data'

const props = defineProps({
  title: { type: String, default: '' },
  price: { type: Number, default: 0 },
  digital: { type: Boolean, default: false },
  stripe_id: { type: String, default: '' },
  color: { type: String, default: '' },
  sort: { type: Number, default: 0 },
});

const route = useRoute()

const { isDark } = useData()

const backgroundColor = computed(() => props.color || `oklch(${isDark.value ? 60 : 92}% .07 ${props.sort * 360 / data?.products.length})`)

</script>

<template lang="pug">
.flex.items-center.gap-2.relative.p-2.bg-light-100.rounded.dark-bg-dark-200.select-none(
  style="font-weight: normal;"
  v-if="title",
  )
  .tracking-widest.tabular-nums.p-2.text-2xl.bg-light-500.bg-opacity-100.rounded.dark-bg-dark-800.dark-bg-opacity-70.backdrop-blur-lg.font-bold(
    :style="{backgroundColor}"
  ) ${{ price }}

  .flex.gap-2.items-center.price.p-2.bg-light-200.bg-opacity-70.rounded-md.dark-bg-dark-400.dark-bg-opacity-70.backdrop-blur-lg.opacity-50(v-if="digital" title="This is a digital product. You will receive a link to download the PDF file and will have a personal licence to print it by yourself.")
    .i-ri-download-cloud-fill
    .p-1.text-sm DIGITAL

  .flex.gap-2.items-center.price.p-2.bg-light-200.bg-opacity-70.rounded-md.dark-bg-dark-400.dark-bg-opacity-70.backdrop-blur-lg.opacity-50(v-else title="This is a physical product, that was printed on high quality materials and is sent to our customers via international post delivery.")
    .i-mdi-email-newsletter
    .p-1.text-sm MATERIAL


  .flex-1
  slot
  .p-0(style="flex: 1000;")
  transition(name="fade" mode="out-in")
    .flex-auto.font-bold.ml-2.transition-all.duration-300.flex.items-center.gap-1.rounded.shadow.p-3.relative.cursor-pointer.flex.items-center.justify-center(
      :style="{backgroundColor}"
      v-if="stripe_id && !cart[stripe_id]"
      key="add"
      @click.prevent.stop="addToCart(title, {...props, id:props.stripe_id, path:route.path})") 
      .i-la-shopping-bag.text-2xl
      .p-0.uppercase Add to cart
      shop-cart-icon(:id="stripe_id")
    a.font-bold.transition-all.duration-300.flex.items-center.gap-2.rounded-lg.shadow.p-2.relative.cursor-pointer(
      :style="{backgroundColor}"
      style="flex:1 0 130px;"
      key="view"
      href="/cart/" v-else) 
      .i-la-check.text-2xl
      .p-0.uppercase In cart
</template>

