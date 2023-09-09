<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template lang="pug">
Layout
  template(#layout-bottom)
    .flex.items-center.text-center.min-h-30
      .p-2.max-w-45ch.mx-auto
        a(title="Visual Music Language", href="https://chromatone.center", target="_blank") Chromatone
</template>

