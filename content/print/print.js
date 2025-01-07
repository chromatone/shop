export const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

export const flats = ['Bbb', 'Bb', 'Cb', 'Dbb', 'Db', 'Ebb', 'Eb', 'Fb', 'Gbb', 'Gb', 'Abb', 'Ab']

export function pitchColor(pitch = 0) {
  return ["#ED2524", "#F47F20", "#F4D700", "#8EC63E", "#32B34A", "#00A792", "#38BFC3", "#0097D8", "#3E6BB3", "#7F55A2", "#B54C9B", "#EC1F7E"][pitch % 12]
}

export function rotateArray(arr, count = 1) {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)]
}

export function getCircleCoord(n = 0, total = 12, radius = 35, width = 100) {
  let angle = ((n - total / 4) / (total / 2)) * Math.PI
  let x = radius * Math.cos(angle) + width / 2
  let y = radius * Math.sin(angle) + width / 2
  return { x, y }
}