<script setup>
import { useFavoritesStore } from 'src/stores/favorites'
const props = defineProps({
  gif: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})
const faveStore = useFavoritesStore()
const toggleFavorite = () => {
  if (!props.gif?.id) return
  faveStore.toggleFavorite(props.gif)
}
</script>

<template>
  <Transition appear enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100" :style="{ transitionDelay: `${props.index * 100 + 200}ms` }">
    <q-card class="my-card transform transition-transform duration-300 hover:-translate-y-1 group">
      <div
        class="overflow-hidden bg-neutral-900 dark:bg-neutral-700 hover:shadow-xl transition-all duration-300 rounded-lg border border-gray-200 dark:border-neutral-700">
        <div class="relative">
          <q-img :src="gif.images?.original?.url" :alt="gif.title || 'GIF sem título'" class="w-full h-48 object-cover">
            <div class="absolute-bottom text-subtitle2 text-center">
              <span class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                {{ gif.title?.toUpperCase() || '' }}
              </span>
            </div>
          </q-img>
          <button @click.stop="toggleFavorite"
        class="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full transition-opacity duration-300 hover:bg-purple-100 dark:hover:bg-gray-700 flex items-center justify-center"
        :class="faveStore.isFavorite(gif.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
        aria-label="Toggle favorite"
        style="width: 32px; height: 32px;">
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="h-5 w-5"
       :class="faveStore.isFavorite(gif.id) ? 'text-red-500 fill-red-500' : 'text-purple-600 dark:text-purple-400 fill-transparent'"
       viewBox="0 0 20 20" 
       stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>
        </div>
      </div>
    </q-card>
  </Transition>
</template>s
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
