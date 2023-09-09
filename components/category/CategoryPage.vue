<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col
  img(:src="`/cover/${f?.slug}.webp`")
  h2.text-xl {{ f?.title }}
  p {{ f?.description }}
  slot
  ProductList
</template>