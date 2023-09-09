<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col.items-center.max-w-150.gap-8

  h2.text-3xl {{ f?.title }}
  p {{ f?.description }}
  img(:src="`/categories/${f?.slug}.webp`")
  slot
  ProductList
</template>