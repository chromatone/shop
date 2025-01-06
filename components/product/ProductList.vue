<script setup>
import { useData } from 'vitepress';
import { data } from '../../db/shop.data'
import ProductCard from './ProductCard.vue';
import { computed } from 'vue';

const { params, frontmatter: f } = useData()
const category = computed(() => data.categories.find((cat) => cat.slug == params.value.slug))
</script>

<template lang='pug'>
.flex.flex-col.gap-8.my-16
  ProductCard(
    v-for="product in [...category.products].sort((a, b) => a.sort > b.sort ? 1 : -1)", :key="product.slug", v-bind="product"
    )
</template>