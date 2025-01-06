<script setup>
import { createDirectus, readItem, rest, createItem, uploadFiles } from '@directus/sdk';
import { computed, onMounted, reactive, ref } from 'vue';

const props = defineProps({
  product: { type: String, default: '' },
})

const client = createDirectus('https://db.chromatone.center/').with(rest())

const reviews = ref([])

onMounted(async () => {
  let product = await client.request(readItem(
    'products',
    props.product,
    {
      fields: [

        {
          reviews: ['*']
        }
      ]
    }))
  reviews.value = product.reviews.sort((a, b) => a.date < b.date ? 1 : -1)
})

const average = computed(() => reviews.value.reduce((prev, next) => prev += next.rating, 0) / reviews.value.length)

const open = ref(false)
const add = ref(false)
const added = ref(false)

const selectedFile = ref(null);

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
};

const form = reactive({
  status: 'draft',
  date: new Date().toISOString().split('T')[0],
  content: '',
  rating: 5,
  author: '',
  author_link: '',
  product: props.product,
})

async function addReview(event) {
  const formData = new FormData();

  if (selectedFile.value) {
    formData.append('folder', 'b84d5f23-aa89-498e-840d-9d34d79aa4fa');
    formData.append('file', selectedFile.value);
    let uploaded = await client.request(uploadFiles(formData));
    form.cover = uploaded?.id
  }

  let result = await client.request(createItem('reviews', form))
  console.log(result)
  added.value = true
}

const isValid = computed(() => form.author && form.content)

</script>

<template lang='pug'>
.my-8
  .flex.gap-2.max-w-140.mb-4.text-xl
    .rounded.p-4.flex.gap-4.cursor-pointer.bg-light-900.dark-bg-dark-200.flex-auto(@click="open = !open")
      .p-0 Reviews ({{ reviews.length }})
      .flex-auto 
      .p-0.flex.items-center.gap-2(v-if="reviews?.length > 0")   {{ average.toFixed(1) }}
        .i-la-star-solid.text-yellow-500.text-lg
      transition(name="fade" mode="out-in")
        .i-la-angle-down(v-if="!open")
        .i-la-angle-up(v-else)
    button.p-4.bg-light-900.dark-bg-dark-200.rounded(@click="add = !add" title="Add a review" aria-label="Add a review")
      .i-la-plus(
        :class="{ '-rotate-45': add }"
        )
  transition(name="fade")
    .p-4.bg-light-900.dark-bg-dark-200.max-w-140(v-if="added") Thank you! Your review has been submitted. It will be published after moderation.

  transition(name="fade")
    form.flex.flex-col.p-4.bg-light-900.dark-bg-dark-200.max-w-140.gap-4(v-show="add && !added" @submit.prevent.stop="addReview")
      .text-lg.flex.items-center.gap-0(for="rating") Rating 
        .flex-1
        .px-2 {{ form.rating }}
        .opacity-70.hover-opacity-100.gap-1.flex
          .p-0.text-yellow-500.cursor-pointer(v-for="s in 5" :key="s" @click="form.rating = s")
            .i-la-star-solid(v-if="s <= form.rating")
            .i-la-star(v-else)
      .flex.flex-wrap.gap-2
        .flex.flex-col.gap-2.flex-1
          label.text-lg(
            for="author") Author *
          input#author(v-model="form.author" placeholder="Your name")
        .flex.flex-col.gap-2.flex-1
          label.text-lg(for="author_link") Profile link
          input#author_link(v-model="form.author_link"
            placeholder="A link to your social profile"
            )
      .flex.flex-col.gap-2
        label.text-lg(for="form-content") Content *
        textarea#form-content(
          v-model="form.content"
          rows="3"
          placeholder="Describe your experience with the product"
          )
      .flex.flex-col.gap-2
        label.text-lg(for="files") Files
        input#files(
          type="file"
          name="file"
          accept="image/*"
          @change="handleFileChange"
          placeholder="Describe your experience with the product"
          )
      .opacity-40 All reviews are manually moderated before being published.
      button.p-4.bg-light-500.shadow.rounded.dark-bg-dark-800(
        type="submit"  
        :disabled="!isValid"
        :class="{ 'opacity-50': !isValid }"
        ) 
        .text-red-500(v-if="!isValid") Please fill in your name and add review content
        .p-0(v-else) Submit

  transition(name="fade")
    .flex.flex-wrap.gap-4(v-show="open")
      .shadow.flex.flex-wrap.bg-light-400.dark-bg-dark-400.max-w-140(
        :style="{ flex: `${review.cover ? 1000 : 1} 1 280px` }"
        v-for="review in reviews" :key="review"
        ) 
        .flex.flex-col.gap-4(
          style="flex: 1 1 200px"
          )
          .p-4.flex-1.relative
            .flex.text-yellow-500.mb-2
              .i-la-star-solid(v-for="s in review.rating" :key="s")
              .i-la-star(v-for="s in (5 - review.rating)" :key="s")
            .text-lg.mb-4.flex.items-center.gap-2
              .p-0 {{ review.author }}
              a.i-la-link(
                v-if="review.author_link"
                target="_blank"
                :href="review.author_link") 
              .flex-1
              .p-0.text-xs {{ review.date }}
            .text-md {{ review.content }}
            .mt-2(v-if="review.cover")
              img.w-full.max-w-50(:src="`https://db.chromatone.center/assets/${review.cover}&w=10`")

</template>

<style scoped lang="postcss">
input,
textarea {
  @apply dark-bg-dark-400 p-2 max-w-140
}
</style>