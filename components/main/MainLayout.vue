<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'
const { isDark } = useData()

const route = useRoute()
</script>

<template lang="pug">
.flex.flex-col.bg-light-500.dark-bg-dark-100.dark-text-light-500.min-h-100dvh
  nav.flex.gap-4
    a.p-2.text-lg.font-bold(href="/") Chromatone shop
    .flex-1
    .p-4(@click="isDark = !isDark")
      .i-la-sun(v-if="!isDark")
      .i-la-moon(v-else)
  transition(name="fade")
    content(:key="route.path")
</template>

<style>
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}
</style>