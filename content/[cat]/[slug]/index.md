---
dynamic: true
title: Product
---

<script setup>
import ProductReviews from '../../../components/product/ProductReviews.vue'
import ShopPrice from '../../../components/shop/ShopPrice.vue'
import { useData } from 'vitepress'

const { params, frontmatter: f } = useData()
</script>

<img class=" w-full rounded-2xl" alt="Product cover" :src="`/products/${f.slug}.webp`">

<!-- @content -->

<article class=" w-full flex flex-wrap items-start gap-4" v-if="f?.images.length">
<div v-for="{directus_files_id} in f?.images" :key="img" style="flex: 1 1 220px">
  <img class="rounded-xl shadow-xl" :src="`https://db.chromatone.center/assets/${directus_files_id}?width=400`" alt="Product image" />
</div>
</article>

<product-reviews :product="f.id"></product-reviews>

<shop-price class="mx-2 sticky bottom-4 shadow-2xl" v-bind="f" ></shop-price>
