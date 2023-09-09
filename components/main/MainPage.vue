<script setup>
import { data } from '../../db/shop.data'
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8.bg-red-500
  a(v-for="category in data?.categories", :key="category", v-bind="category", :href="`/${category?.slug}/`")
    img(:src="`https://db.chromatone.center/assets/${category.cover}?fit=cover&width=300&height=300&format=webp`")
    .p-2 {{ category?.title }} ({{category.products.length}})

</template>