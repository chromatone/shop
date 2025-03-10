<script setup>

import { colord } from 'colord'
import { reactive, computed } from 'vue'
import { ChordType } from 'tonal'
import { notes, flats, rotateArray, pitchColor } from './print'

const props = defineProps({
  chroma: { type: String, default: '100000000000' },
  letters: { type: Boolean, defualt: false },
  pitch: { type: Number, default: 0 },
  scale: { type: String },
  type: { tyoe: String },
  roman: { type: String, default: '' },
  title: { type: Boolean, default: true },
  playAll: { type: Boolean, default: false }
});

const emit = defineEmits(['update:pitch'])

const keys = reactive({
  white: [3, 5, 7, 8, 10, 0, 2],
  black: [4, 6, null, 9, 11, 1],
  chroma: computed(() => rotateArray(props.chroma.split(''), -props.pitch)),
  title: computed(() => {
    if (!ChordType.get(props.chroma)?.empty) return ChordType.get(props.chroma).aliases[0]
    // if (!ScaleType.get(props.chroma)?.empty) return ScaleType.get(props.chroma).aliases[0]
    else return ''
  })
});

function isInChroma(note) {
  return note != null && keys.chroma[note] == '1'
}

function isInScale(note) {
  return props.scale && note != null && keys.chroma[note] == '1'
}

function keyColor(key, off) {
  if (key == null) return 'transparent'
  if (key == props.pitch) return pitchColor(key)
  if (isInChroma(key) && !off) return colord(pitchColor(key)).lighten(0.1).toHex()

  return notes[key].length != 2 ? '#fff' : '#999'
}

</script>

<template lang="pug">
//- .flex.justify-center.my-2.px-2(v-if="title")
//-   .absolute.right-4 {{ roman }}
//-   .font-bold.text-xl.flex-1.text-center {{ notes[pitch] }}{{ keys.title }}
svg.w-full.mt-2#chroma-keys(
  version="1.1",
  baseProfile="full",
  :viewBox="`-10 -150 720 500`",
  xmlns="http://www.w3.org/2000/svg",
  font-weight="200"
  font-size="40"
  font-family="Commissioner, sans-serif"
  text-anchor="middle",
  dominant-baseline="middle"
  :class="{ letters }"
  )
  defs
    filter#shadowButton(x="-50%" height="200%" width="300%")
      feDropShadow(dx="0" dy="3" stdDeviation="4" flood-color="#2225")

  rect(
    y="-40"
    x="50"
    width="620" 
    height="40" 
    rx="20"
    :fill="colord(pitchColor(pitch)).toHex()")

  text(
    font-weight="thin"
    font-family="Commissioner, sans-serif"
    fill="black"
    text-anchor="start",
    x="80"
    y="-90"
    font-size="90" ) {{ notes[pitch] }}{{ type || keys.title }}

  g.white
    g.key(
      v-for="(key, k) in keys.white" :key="key"
      :transform="`translate(${k * 94 + 30} 30)`"
      @mousedown.stop="$emit('update:pitch', key)"
    )
      rect.transition-all.duration-300.ease-out(
        width="90"
        height="290"
        rx="45"
        :fill="keyColor(key, true)"
        style="filter:url(#shadowButton);"
        )
      circle.transition-all.duration-300.ease-out(

        cy="245"
        cx="45"
        r="45"
        :fill="keyColor(key)"
        )
      text.pointer-events-none(
        v-show="isInChroma(key)"
        y="250"
        x="45"
        :fill="colord(pitchColor(key)).isDark() ? 'white' : 'black'"
        ) 
        tspan(    

          ) {{ notes[key] }}
  g.black 
    g.key(
      v-for="(key, k) in keys.black" :key="key"
      :transform="`translate(${k * 95 + 80} 10)`"
      @mousedown.stop="$emit('update:pitch', key)"
      )
      rect.transition-all.duration-300.ease-out(
        v-if="key"
        width="80"
        height="200"
        rx="40"
        style="filter:url(#shadowButton);"
        :fill="keyColor(key, true)"
        :data-check="key"
        )
      circle.transition-all.duration-300.ease-out(
        v-if="key"
        cy="160"
        cx="40"
        r="40"
        :fill="keyColor(key)"
        stroke-width="8"
        :stroke="isInScale(key) ? pitchColor(key) : 'transparent'"
        )
      text.pointer-events-none(
        v-show="isInChroma(key)"
        :fill="colord(pitchColor(key)).brightness() < 0.5 ? 'white' : 'black'"
        ) 
        tspan(y="165" x="42") {{ notes[key] }}
        tspan(y="50" x="42" ) {{ flats[key] }}
</template>

<style lang="postcss" scoped>
.key text {
  transition: all 300ms ease;
}

.letters .key .text {
  opacity: 1;
}

.key:hover text {
  opacity: 1;
}
</style>
