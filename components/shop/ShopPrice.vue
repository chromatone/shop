<script setup>
import { cart, addToCart, open } from '../../composables/cart'
import { useRoute, useData, useRouter } from 'vitepress';
import { data } from '../../db/shop.data'
import ShopCartIcon from './ShopCartIcon.vue';
import { computed } from 'vue';

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

const backgroundColor = computed(() => props.color || `oklch(${isDark.value ? 60 : 82}% .18 ${props.sort * 360 / data?.products.length})`)

</script>

<template lang="pug">
.flex.rounded-xl.items-stretch.flex-col.relative.bg-light-100.bg-op-80.dark-bg-dark-400.dark-bg-opacity-80.select-none.backdrop-blur-lg.p-4.gap-2(
  style="font-weight: normal;"

  )
  .p-0.flex.gap-4.items-baseline
    .p-0(v-if="title") {{ title }}
    .flex-1
    .p-0.uppercase.text-sm.opacity-60.text-right {{ material?.[0] || 'VINYL' }}
  //- .flex.gap-2.items-center(
  //-   :title="digital ? 'This is a digital product. You will receive a link to download the PDF file and will have a personal licence to print it by yourself.' : 'This is a physical product, that was printed on high quality materials and is sent to our customers via international post delivery.'"
  //-   style="flex: 1"
  //-   )

  .flex.items-center.gap-2

    .tracking-widest.tabular-nums.text-2xl.flex.items-baseline ${{ price }}
      .op-30.text-sm .00
    .flex-1
    button.flex-0.transition-all.duration-300.flex.items-center.gap-2.rounded-xl.shadow.px-2.py-1.relative.cursor-pointer.flex.items-center.justify-start(
      :style="{ backgroundColor }"
      key="add"
      @click.prevent.stop="stripe_id && !cart[stripe_id] ? addToCart(title, { id: props.stripe_id, path: route.path, ...props, category: category.slug }) : (open = true)") 
      template(v-if="stripe_id && !cart[stripe_id]")
        .i-la-shopping-cart.text-2xl
        .p-0.uppercase.whitespace-nowrap Add To Cart
      template(v-else)
        .i-la-check.text-2xl
        .p-0.uppercase.flex-auto In Cart
        ShopCartIcon(:id="stripe_id")
      
</template>
