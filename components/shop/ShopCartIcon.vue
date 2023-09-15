<script setup>
import { cart } from '../../composables/cart'

const props = defineProps({
	id: { type: String, default: null }
})

const quantity = computed(() => {
	let q = 0
	if (props.id) {
		q = cart.value?.[props.id]?.quantity
	} else {
		for (let id in cart.value) {
			q += cart.value[id].quantity
		}
	}
	return q
})
</script>

<template lang="pug">
.dark-bg-dark-900.bg-opacity-90.text-center.rounded-full.bg-dark-300.text-white.dark-bg-opacity-60.backdrop-blur-md.pb-6px.px-8px(v-if="quantity>0")
	.p-0.font-bold {{quantity || '+'}}
</template>