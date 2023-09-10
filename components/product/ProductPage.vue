<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col.items-center.max-w-150.gap-8
  a.text-2xl.bg-light-900.dark-bg-dark-300.py-2.px-4.rounded(:href="`/${f.category.slug}/`") {{ f.category.title }}
  p {{ f.description }}
  .font-bold ${{ f.price }}
  shop-price.w-full(
    v-bind="f"
    )
  img(:src="`/products/${f.slug}.webp`")
  slot
</template>