<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col.items-center.max-w-130.gap-8
  p {{ f?.description }}
  //- img(:src="`/categories/${f?.slug}.webp`")
  slot
  ProductList
</template>