---
dynamic: true
title: Product
---

<script setup>
const { params, frontmatter: f } = useData()
</script>

<img class="max-w-140 w-full rounded-2xl" alt="Product cover" :src="`/products/${f.slug}.webp`">

<!-- @content -->

<product-reviews :product="f.id"></product-reviews>

<shop-price class="ml-auto max-w-140 sticky bottom-4 shadow-2xl" v-bind="f" ></shop-price>
