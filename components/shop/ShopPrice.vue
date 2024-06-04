<script setup>
import { cart, addToCart } from '../../composables/cart'
import { useRoute, useData, useRouter } from 'vitepress';
import { data } from '../../db/shop.data'

const props = defineProps({
  title: { type: String, default: '' },
  price: { type: Number, default: 0 },
  digital: { type: Boolean, default: false },
  stripe_id: { type: String, default: '' },
  color: { type: String, default: '' },
  sort: { type: Number, default: 0 },
  material: { type: Array, default: () => ['VINYL'] },
  slug: { type: String, default: '' },
  category: { type: Object, default: {} },
});

const route = useRoute()

const router = useRouter()

const { isDark } = useData()

const backgroundColor = computed(() => props.color || `oklch(${isDark.value ? 60 : 92}% .18 ${props.sort * 360 / data?.products.length})`)

</script>

<template lang="pug">
.flex.rounded-xl.items-stretch.flex-col.relative.bg-dark-200.bg-op-10.dark-bg-dark-400.dark-bg-opacity-80.select-none.backdrop-blur-lg(
  style="font-weight: normal;"
  v-if="title",
  )
  .flex
    .flex.gap-2.items-center.p-2.leading-5(
      :title="digital ? 'This is a digital product. You will receive a link to download the PDF file and will have a personal licence to print it by yourself.' : 'This is a physical product, that was printed on high quality materials and is sent to our customers via international post delivery.'"
      style="flex: 100 1 50px"
      )
      .p-1.uppercase.text-3.opacity-60 {{ material?.[0] || 'VINYL' }}
    slot
  .flex
    .tracking-widest.tabular-nums.py-4.pl-4.text-2xl.font-bold ${{ price }}
    .flex-auto.font-bold.transition-all.duration-300.flex.items-center.gap-1.rounded-xl.shadow.p-3.relative.cursor-pointer.flex.items-center.justify-start.m-2.mb-4(
      :style="{backgroundColor}"
      key="add"
      @click.prevent.stop="stripe_id && !cart[stripe_id] ? addToCart(title, {id:props.stripe_id, path:route.path, ...props, category: category.slug}) : router.go('/cart/')") 
      template(v-if="stripe_id && !cart[stripe_id]")
        .i-la-shopping-bag.text-2xl
        .p-0.uppercase.whitespace-nowrap Add to cart
      template(v-else)
        .i-la-check.text-2xl
        .p-0.uppercase.flex-auto In cart
        shop-cart-icon(:id="stripe_id")
      
</template>
