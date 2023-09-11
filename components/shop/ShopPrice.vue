<script setup>
import { cart, addToCart } from '../../composables/cart'
import { useRoute } from 'vitepress';

const props = defineProps({
  title: { type: String, default: '' },
  price: { type: Number, default: 0 },
  digital: { type: Boolean, default: false },
  stripe_id: { type: String, default: '' },
});

const route = useRoute()

</script>

<template lang="pug">
.flex.items-center.gap-2.relative.p-2(
  style="font-weight: normal;"
  v-if="title",
  )
  .tracking-widest.tabular-nums.p-2.text-2xl.bg-light-200.bg-opacity-70.rounded-md.dark-bg-dark-400.dark-bg-opacity-70.backdrop-blur-lg.font-bold ${{ price }}

  .price.p-2.text-2xl.bg-light-200.bg-opacity-70.rounded-md.dark-bg-dark-400.dark-bg-opacity-70.backdrop-blur-lg.font-bold(v-if="digital" title="This is a digital good. You will receive a link to download the file and will be able to print it by yourself.")
    .i-la-file-download

  slot
  .flex-1.font-bold.ml-2.transition-all.duration-300.flex.items-center.gap-1.bg-purple-500.rounded-xl.shadow.p-2.relative.cursor-pointer(
    v-if="stripe_id"
    @click.prevent.stop="addToCart(title, {...props, id:props.stripe_id, path:route.path})") 


    .i-la-shopping-cart
    .p-0 Add to cart
    shop-cart-icon.scale-120(:id="stripe_id")
  transition(name="fade")
    a.flex-1.font-bold.ml-2.transition-all.duration-300.flex.items-center.gap-1.bg-purple-300.dark-bg-purple-700.rounded-xl.shadow.p-2.relative.cursor-pointer(href="/cart/" v-if="cart[stripe_id]") View in cart 
</template>

