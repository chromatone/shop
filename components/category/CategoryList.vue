<script setup>
import { data } from '../../db/shop.data'
</script>

<template lang='pug'>
.flex.flex-wrap.gap-8
  a.relative.p-8.bg-light-700.flex-1.flex.items-center.shadow.hover-shadow-md.transition.hover-bg-light-600.dark-bg-dark-300.hover-dark-bg-dark-300(v-for="category in data?.categories", :key="category", v-bind="category", :href="`/${category?.slug}/`")
    //- img.max-w-100(:src="`/categories/${category.slug}.webp`")
    .text-3xl {{ category?.title }}

</template>