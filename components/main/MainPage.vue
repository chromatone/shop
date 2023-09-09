<script setup>
import { data } from '../../db/shop.data'
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8.p-8
  a(v-for="category in data?.categories", :key="category", v-bind="category", :href="`/${category?.slug}/`")
    img(:src="`/cover/${category.slug}.webp`")
    .p-2 {{ category?.title }} ({{category.products.length}})

</template>