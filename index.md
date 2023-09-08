---
title: Shop API
description: Durable vinyl stickers for musical instruments along with printed and printable music theory memos and cheat-sheets
date: 2020-05-20
topContent: true
---

<script setup>
import { data } from './shop.data'
</script>

<!-- <pre>{{data}}</pre> -->

<div class="flex flex-wrap gap-8 m-4">
  <a
    v-for="category in data?.categories" :key="category"
    v-bind="category"
    :href="`/${category?.slug}/`"
  >
  <img :src="`https://db.chromatone.center/assets/${category.cover}?fit=cover&width=300&height=300&format=webp`" />
  <div class="p-2">{{ category?.title }} ({{category.products.length}})</div></a>
</div>
