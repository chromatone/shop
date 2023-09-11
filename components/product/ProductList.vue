<script setup>
import { data } from '../../db/shop.data'

const { params, frontmatter: f } = useData()
const category = computed(() => data.categories.find((cat) => cat.slug == params.value.slug))
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8.m-4
  ProductCard(v-for="product in [...category.products].sort((a,b)=>a.sort>b.sort ? 1 : -1)", :key="product", v-bind="product")
    
    
</template>