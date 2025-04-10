<script setup>
import { onMounted } from 'vue';
import { useGifsStore } from "src/stores/gifs";
import CardGif from "src/components/ux/CardGif.vue";

const store = useGifsStore()

onMounted(() => {
  store.selectCategoryAndSearch('Action') // ou qualquer categoria inicial
});
</script>

<template>
  <section class="px-4 md:px-8">
    <div class="relative inline-block mt-4 mb-8">
      <q-select filled v-model="store.selectedCategory" use-chips label="Lazy load opts" :options="store.categories"
        @filter="filterFn" @filter-abort="abortFilterFn" style="width: 250px" class="bg-neutral-700 min-w-[300px] max-w-[300px] w-full absolute top-0 left-12 transition-all duration-300
        text-white  " option-label="name" option-value="name" color="purple" />
      <!-- <select class="border border-gray-300 rounded px-4 py-2 w-full" v-model="store.selectedCategory">
        <option disabled value="">Selecione</option>
        <option v-for="category in store.categories" :key="category.name" :value="category">
          {{ category.name }}
        </option>
      </select> -->
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <CardGif v-for="(gif, index) in store.gifs" :key="gif.id" :gif="gif" :delay="index * 100 + 200" />
    </div>
  </section>
</template>
