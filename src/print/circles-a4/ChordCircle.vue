<script setup>
import { colord } from 'colord'

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

function rotateArray(arr, count = 1) {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)]
}

function getCircleCoord(n = 0, total = 12, radius = 35, width = 100) {
  let angle = ((n - total / 4) / (total / 2)) * Math.PI
  let x = radius * Math.cos(angle) + width / 2
  let y = radius * Math.sin(angle) + width / 2
  return { x, y }
}

function pitchColor(pitch = 0, octave = 0, velocity = 1, alpha = 1) {
  if (octave === undefined) {
    octave = Math.floor(pitch / 12) + 4
  }
  return `hsla(${(pitch % 12) * 30},${velocity * 100}%,${Math.abs(octave + 2) * 8}%,${alpha})`
}

const props = defineProps({
  pitch: { type: Number, default: 0 },
  chroma: { type: String, default: '1001000100101' },
  type: { type: String, default: '' },
  tonic: { type: Number, default: 0 },
});
</script>

<template lang="pug">
g
  //- circle(
    cx="0"
    cy="0"
    r="8"
    :fill="pitch === false ? 'none' : colord(pitchColor(pitch)).toHex()"
    )
  g(v-for="(note, n) in rotateArray(chroma.split(''), -tonic)" :key="note")
    line(
      :x1="getCircleCoord(n, 12, 6.5, 0).x"
      :y1="getCircleCoord(n, 12, 6.5, 0).y"
      x2="0"
      y2="0"
      v-if="note == '1'"
      stroke-linecap="square"
      stroke-width="3.92"
      :stroke="note == '1' ? colord(pitchColor(n)).toHex() : 'none'"
      )
  g(
    v-for="(note, n) in rotateArray(chroma.split(''), -tonic)" :key="note"
    :transform="`translate(${getCircleCoord(n, 12, 8, 0).x}, ${getCircleCoord(n, 12, 8, 0).y})`"
  )
    circle(
      x="0" 
      y="0" 
      :r="note == '1' ? 2 : 1"
      :fill="colord(note == '1' ? pitchColor(n) : notes?.[n].length != 2 ? 'hsl(0,0%,85%)' : 'hsl(0,0%,60%)').toHex()"
    )
    text(
      v-if="note == '1'"
      y="0.3"
      font-size="2px"
      font-weight="bold"
      fill="white"
      ) {{ notes?.[n] }}

  circle(
    cx="0"
    cy="0"
    r="3.5"
    :fill="pitch === false ? 'none' : colord(pitchColor(pitch)).toHex()")

  text(
    y="0.3"
    font-size="2"
    font-weight="bold"
    fill="white"
    ) {{ pitch === false ? '' : typeof pitch == 'string' ? pitch : notes?.[pitch % 12] }}{{ type }}
  
</template>

<style lang="postcss" scoped></style>