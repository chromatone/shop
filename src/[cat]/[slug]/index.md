---
dynamic: true
title: Product
---

<script setup>
const { params, frontmatter: f } = useData()
</script>

<img class=" w-full rounded-2xl" alt="Product cover" :src="`/products/${f.slug}.webp`">

<!-- @content -->

<product-reviews :product="f.id"></product-reviews>

<shop-price class="mr-auto sticky bottom-0 shadow-2xl" v-bind="f" ></shop-price>
