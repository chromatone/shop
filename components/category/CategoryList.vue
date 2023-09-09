<script setup>
import { data } from '../../db/shop.data'
</script>

<template lang='pug'>
.flex.flex-col.items-center.gap-8.p-8
  a.relative(v-for="category in data?.categories", :key="category", v-bind="category", :href="`/${category?.slug}/`")
    //- img.max-w-100(:src="`/categories/${category.slug}.webp`")
    .p-2.text-2xl {{ category?.title }}

</template>