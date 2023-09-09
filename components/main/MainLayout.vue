<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'
const { isDark, frontmatter: f } = useData()

const route = useRoute()
</script>

<template lang="pug">
.flex.flex-col.bg-light-500.dark-bg-dark-100.text-center.dark-text-light-500.min-h-100dvh.site.items-center.gap-8
  .p-2.absolute.top-2.right-2.cursor-pointer(@click="isDark = !isDark")
    .i-la-sun(v-if="!isDark")
    .i-carbon-moon(v-else)
  a.flex.flex-col.gap-4.items-center.mt-6(href="/")
    img.w-30(src="/logo.svg")
    .text-4xl.font-bold Chromatone shop
  .flex.flex-col.markdown-body
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

:root {
  --font-family-base: "Commissioner", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  --font-family-mono: "Fira Code", source-code-pro, Menlo, Monaco, Consolas,
    "Courier New", monospace;
}

.site {
  font-family: var(--font-family-base);
}

@font-face {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 400;
  src: local(""),
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-regular.woff2") format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-regular.woff") format("woff");
  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

@font-face {
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 700;
  src: local(""),
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-700.woff2") format("woff2"),
    /* Chrome 26+, Opera 23+, Firefox 39+ */
    url("/fonts/commissioner-v3-latin_cyrillic-ext_cyrillic-700.woff") format("woff");
  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

.markdown-body {
  line-height: 1.6;
}

.markdown-body h1 {
  font-size: 3em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
}

.markdown-body h2 {
  font-size: 2em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
}

.markdown-body h3 {
  font-size: 1.5em;
  padding-bottom: 0.3em;
}

.markdown-body ul,
.markdown-body ol {
  padding-left: 2em;
}

.markdown-body blockquote {
  margin: 0;
  padding-left: 3em;
  border-left: 0.5em #eee solid;
}

.markdown-body code {
  padding: 0.2em 0.5em;
  margin: 0;
  font-family: monospace;
  font-size: 90%;
  border-radius: 3px;
}
</style>