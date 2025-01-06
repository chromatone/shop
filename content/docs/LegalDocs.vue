<script setup>
import { data } from '../../db/shop.data'

const { docs } = data
</script>

<template lang='pug'>
.flex.flex-wrap.gap-2.max-w-150.text-sm.justify-center
  a.p-1.opacity40.hover-opacity-80.transition(
    v-for="doc in docs" :key="doc"
    :href="`/docs/${doc.slug}/`"
    ) {{ doc.title }}
</template>