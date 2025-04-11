<script setup>
import CardGif from 'src/components/ux/CardGif.vue';
import { useFavoritesStore } from 'src/stores/favorites';
const store = useFavoritesStore();
</script>
<template>
  <section class="px-4 md:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <CardGif v-for="(gif, index) in store.favorites" :key="gif.id" :gif="gif" :delay="index * 100 + 200" />
    </div>
  </section>

</template>
