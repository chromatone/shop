<script setup>
import { cart, checkout, total, open, delivery, count } from '../../composables/cart'

const { isDark } = useData()
</script>

<template lang="pug">
.flex.flex-col.tabular-nums.max-w-150.sticky.bottom-0.bg-light-400.dark-bg-dark-200.w-full.items-stretch(v-if="cart && Object.keys(cart).length > 0")

	table.text-left.m-0.mb-4.w-full
		tr.text-md.sticky.top-0.z-20.font-bold
			td Item
			td.text-center Price
			td.text-center Quantity
			td.text-right Total
		tr(v-for="(pos,id,i) in cart" :key="id")
			td.flex-1.text-left.flex.items-center.gap-2.border-l-10(
				:style="{borderColor:`oklch(${isDark ? 60 : 92}% .07 ${i * 360 / Object.keys(cart)?.length})`}"
				)
				img.max-w-20(:src="`/products/${pos.slug}.webp`")
				a.cursor-pointer.no-underline.flex-auto(:href="`/${pos.category}/${pos.slug}/`" @click="open = false") {{pos.title}}
				.i-la-file-download.text-xl.w-20(
					v-if="pos.digital"
					)
			td.text-center ${{pos.price}} 
			td
				.flex.justify-between.items-center
					.flex.gap-2.items-center.flex-1.justify-center
						button.cursor-pointer.text-sm.cursor-pointer.bg-light-900.bg-opacity-20.p-1.rounded-xl(@click="pos.quantity--")
							.i-la-minus
						.font-bold {{pos.quantity}}
						button.cursor-pointer.text-sm.cursor-pointer.bg-light-900.bg-opacity-20.p-1.rounded-xl(@click="pos.quantity++")
							.i-la-plus
			td.w-6ch.text-right.font-bold ${{Number(pos.price) * Number(pos.quantity)}}
		tr(v-if="delivery.needed")
			td.font-bold 
				.flex.gap-2 
					p Worldwide delivery 
			td(colspan="2")
				.flex.flex-col.gap-2
					.flex-1(v-for="(way,name) in delivery.ways" :key="way")
						label.w-full.px-2.pt-1.pb-2.border-1.rounded-lg.flex.items-center.border-dark-100.border-opacity-40.transition.cursor-pointer.gap-1.relative(
							:class="{active:delivery.current == name}"
							)
							input.hidden(
								type="radio" 
								name="delivery" 
								v-model="delivery.current"
								:value="name")
							.price.text-lg ${{way.price}}&nbsp;
							.font-normal.text-left(:title="way.description") {{way.title}} 
			td.text-right.font-bold ${{delivery?.selected?.price}}
		tr(:style="{opacity: count > 1 ? 1: .3}" v-if="delivery.needed")
			td(colspan="1")
				.flex.gap-4
					.text-md <b>Free</b> Holographic Chromatone sticker for <b>2 or more</b> items!
			td FREE
			td.text-center.font-bold {{ count >=2 ? 1 : 0 }}
			td.relative
				.flex.items-center.justify-center
					.i-la-plus.absolute.-left-1.text-1rem(v-if="count>1")
					img.h-8(src="/logo.svg")

		tr(v-else)
			td.p-2(colspan="4") All products in your cart are digital. We will send you the download link shortly.
		tr.sticky.bottom-0
			td.font-bold(colspan="2") Total
			td.font-bold.text-center {{ count + (delivery.needed && count>=2 ? 1 : 0) }} items
			td.font-bold.text-right ${{total}}

	.flex.gap-2.mt-2.p-2
		button.flex.items-center.transition.font-bold.shop-button.text-xl.flex-1.hover-shadow-lg.p-4.rounded.shadow.gap-4(
			:style="{backgroundColor: `oklch(${isDark ? 60 : 80}% .17 ${340} / .6)`}"
			@click="checkout()") 
				.i-tabler-credit-card-pay
				.flex-0 PROCEED TO CHECKOUT 
				.flex-1
				.flex-0 ${{ total }}
	.my-4.text-sm.opacity-40.px-4 Secure payment processing provided by <a class="font-bold" href="https://stripe.com" target="_blank">Stripe</a>.  <br> Please <a class="font-bold" href="mailto:support@chromatone.center">contact us</a> in case of any problems with checkout.

</template>

<style scoped lang="postcss">
td {
	@apply p-2;
}

tr {
	@apply backdrop-blur-sm
}

tr:nth-child(2n) {
	@apply dark-bg-dark-300/80 bg-light-100/80;
}

tr:nth-child(2n+1) {
	@apply dark-bg-dark-400/80 bg-light-800/80;
}

.active {
	@apply border-dark-700 dark-border-light-100 dark-bg-dark-400 bg-light-700;
}

.active .price {
	@apply font-bold;
}
</style>

<style>
.v-popper__popper {
	max-width: 20em;
}
</style>