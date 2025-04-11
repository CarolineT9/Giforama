<script setup>
import { ref, watch } from 'vue'
import CardGif from "src/components/ux/CardGif.vue"
import { useGifsStore } from "src/stores/gifs"

const storeGifs = useGifsStore()
const text = ref('')
const searchActive = ref(false)
const loadingState = ref(false)

watch(text, async (newText) => {
  if (newText.length > 2) {
    loadingState.value = true
    await storeGifs.searchGifs(newText)
    loadingState.value = false
  } else if (newText.length === 0) {
    storeGifs.getGifs()
  }
});
</script>
<template>
  <section class="py-16 px-4 md:px-8">
    <div class="relative inline-block">
      <q-btn flat unelevated dense class="text-purple-600 hover:text-purple-800 transition-colors"
        @click="searchActive = true">
        <q-icon name="mdi-magnify" />
      </q-btn>
      <q-input v-if="searchActive" ref="searchInput" filled v-model="text" label="Buscar por palavra chave"
        :loading="loadingState" input-class="text-white placeholder-white" placeholder="Digite uma palavra chave..."
        class="bg-neutral-700 min-w-[300px] max-w-[300px] w-full absolute top-0 left-12 transition-all duration-300 text-white"
        color="purple" label-color="white" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
