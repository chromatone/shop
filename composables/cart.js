import { loadStripe } from '@stripe/stripe-js';
import { useStorage } from '@vueuse/core';
import { useClamp } from '@vueuse/math';
import { ref, computed, reactive, watch } from 'vue'

import countries from './countries.json'
import { data as ways } from '../db/delivery.data'


const stripeKey = 'pk_test_51M1WfLBJnUXQERoc8kJxlKVjvlphOZDdPRGfnPdwhZn7BRztRTjHjgVCV6VYjWD64drtyVfSjy7J9VzDRXLb7YkS0056oBSnN9'

const MaxQuantity = 5

export const cartInitilized = ref(false)
export const open = ref(false)
export const cart = useStorage('shopping-cart', {})


export const delivery = reactive({
	current: useStorage('delivery-way', 'regular'),
	selected: computed(() => delivery.ways[delivery.current]),
	needed: computed(() => {
		let need = false
		for (let row in cart.value)
			need = need || !cart.value[row].digital
		return need
	}),
	ways
})

export const count = computed(() => {
	let all = 0
	for (let id in cart.value) {
		all += Number(cart.value?.[id]?.quantity)
	}
	return all
})

export const total = computed(() => {
	let sum = 0
	for (let id in cart.value) {
		sum += Number(cart.value?.[id]?.price) * Number(cart.value?.[id]?.quantity)
	}
	if (delivery.needed)
		sum += delivery?.selected?.price
	return sum
})

watch(cart, c => {
	if (Object.keys(c).length <= 0) {
		open.value = false
	}
	for (let id in c) {
		if (c[id].quantity <= 0) {
			delete cart.value[id]
		}
	}
}, { deep: true })

export function addToCart(title, { id, price, digital, path }) {
	if (cart.value[id]) {
		cart.value[id].quantity++
	} else {
		cart.value[id] = { id, title, price, quantity: useClamp(1, 0, MaxQuantity).value, digital, path }
	}
	open.value = true
}

export async function checkout() {
	const stripe = await loadStripe(stripeKey);

	const lineItems = []

	for (let id in cart.value) {
		lineItems.push({
			price: id,
			quantity: cart.value[id].quantity
		})
	}
	// delivery
	if (delivery.needed) {
		lineItems.push({
			price: delivery.selected.id,
			quantity: 1
		})
	}

	try {
		await stripe?.redirectToCheckout({
			lineItems,
			mode: 'payment',
			successUrl: 'https://chromatone.center/shop/success.html',
			cancelUrl: 'https://chromatone.center/shop/cancel.html',
			shippingAddressCollection: delivery.needed ? { allowedCountries: countries } : undefined
		})
	} catch (e) {
		alert('checkout failed')
	}
}
