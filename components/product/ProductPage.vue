<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col.items-center.max-w-150.gap-8
  a.text-xl(:href="`/${f.category.slug}/`") {{ f.category.title }}
  h1.text-xl {{ f.title }}
  p {{ f.description }}
  .font-bold ${{ f.price }}
  img(:src="`/products/${f.slug}.webp`")
  slot
</template>