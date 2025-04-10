<script setup>
import CardGif from "src/components/ux/CardGif.vue";
import { useGifsStore } from "src/stores/gifs";
const storeGifs = useGifsStore();

</script>
<template>
  <section class="py-16 px-4 md:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardGif v-for="(gif, index) in storeGifs.gifs" :key="gif.id" :gif="gif" :delay="index * 100 + 200" />
    </div>
  </section>
</template>
<style>
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}


img[src=""] {
  display: none;
}
</style>
