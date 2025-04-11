<script setup>
import { watch } from 'vue'
import CardGif from "src/components/ux/CardGif.vue"
import { useCategoryStore } from "src/stores/categories"

const store = useCategoryStore()


watch(() => store.selectedCategory, (newCategory) => {
  if (newCategory) {
    store.fetchGifsByCategory(newCategory.name || newCategory)
  }
})
</script>

<template>
  <section class="px-4 md:px-8">
    <div class="relative inline-block mt-4 mb-8">
      <q-select v-model="store.selectedCategory" filled use-input use-chips label="Selecione uma categoria"
        :options="store.categories" @filter="filterFn" option-label="name" option-value="name" style="width: 250px"
        class="bg-neutral-700 min-w-[300px] max-w-[300px] w-full" color="purple" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <CardGif v-for="(gif, index) in store.gifs" :key="gif.id" :gif="gif" :delay="index * 100 + 200" />
    </div>
  </section>
</template>
