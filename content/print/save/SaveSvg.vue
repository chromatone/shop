<script setup>
import { reactive, toRaw, ref } from 'vue'

function useSVGFile(file) {
  const anchor = ref('')

  const download = reactive({
    file: file,
    url: ''
  })

  function saveSVG(pic, deep) {

    let svg = document.getElementById(pic);
    if (deep) svg = svg.childNodes[0]
    if (!svg) return
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svg);
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    let url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    download.url = url
    download.file = toRaw(file)

    setTimeout(() => {
      anchor.value.click()
    }, 100);
  }

  return {
    download, anchor, saveSVG
  }
}



const props = defineProps({
  svg: String,
  file: {
    type: String,
  },
  deep: Boolean
});


const { anchor, download, saveSVG } = useSVGFile(props.file || props.svg)

</script>

<template lang="pug">
.snapshot(@click="saveSVG(svg, deep)")
  .i-la-camera
  slot
    .font-bold SVG
a(ref="anchor",target="_blank",:download="download?.file",:href="download?.url", v-if="download?.url") 
</template>

<style lang="postcss" scoped>
.snapshot {
  @apply flex items-center cursor-pointer gap-2 bg-light-400 dark-bg-dark-800 py-1 px-4 z-100 rounded-full;
}
</style>