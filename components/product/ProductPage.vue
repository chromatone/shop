<script setup>
const { params, frontmatter: f } = useData()
</script>

<template lang='pug'>
.flex.flex-col  
  img(:src="f?.cover")
  h2.text-xl {{ f.title }}
  p {{ f.description }}
  .font-bold {{ f.price }}
  slot
</template>