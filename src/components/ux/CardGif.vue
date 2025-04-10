<script setup>
defineProps({
  gif: Object,

});
</script>
<template>
  <Transition appear enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100" :style="{ transitionDelay: index * 100 + 200 }">
    <q-card class="my-card transform transition-transform duration-300 hover:-translate-y-1">
      <div
        class="overflow-hidden bg-neutral-900 dark:bg-neutral-700 hover:shadow-xl transition-all duration-300 rounded-lg border border-gray-200 dark:border-neutral-700">
        <div class="relative">
          <q-img :src="gif.images?.original?.url" :alt="gif.title || 'GIF sem título'" class="w-full h-48 object-cover">
            <div class="absolute-bottom text-subtitle2 text-center">
              <span class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                {{ gif.title?.toUpperCase() || null }}
              </span>
            </div>
          </q-img>
          <button
            class="absolute bottom-2 right-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-purple-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600 dark:text-purple-400"
              viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </q-card>
  </Transition>
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
