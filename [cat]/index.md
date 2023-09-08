---
dynamic: true
title: Category
---

<script setup>
import { data } from '../shop.data'
import { useData } from 'vitepress'
import { computed } from 'vue'
const { params, frontmatter:f } = useData()
const category = computed(()=>data.categories.find((cat)=>cat.slug==params.value.slug))
</script>

<img :src="f.cover" />

## {{ f.title }}

> {{ f.description }}

<!-- @content -->

<div class="flex flex-wrap gap-8 m-4">
  <ProductCard
    v-for="product in category.products" :key="product" v-bind="product"
  />
</div>

<!-- <pre>{{category}}</pre> -->

<!-- <pre class="text-xs">{{ frontmatter }}</pre> -->
