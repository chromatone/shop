<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col.max-w-150.gap-8
  //- a.text-2xl.bg-light-900.dark-bg-dark-300.py-2.px-4.rounded(:href="`/${f.category.slug}/`") {{ f.category.title }}
  img(:src="`/products/${f.slug}.webp`")
  slot 
  shop-price.w-full.sticky.bottom-0(
    v-bind="f"
    )
</template>