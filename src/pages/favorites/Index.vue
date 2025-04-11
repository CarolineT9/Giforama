<script setup>
import FaveritesGalery from './FaveritesGalery.vue';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">
    <section class="py-16 px-4 md:px-8" ref="welcomeSection">
      <div class="max-w-6xl w-full">
        <Transition appear enter-active-class="transition duration-1000 ease-out"
          enter-from-class="opacity-0 translate-y-10" enter-to-class="opacity-100 translate-y-0">
          <div class="text-left">
            <h3
              class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              Favoritos
            </h3>
          </div>
        </Transition>
      </div>
    </section>
    <FaveritesGalery />

  </div>
</template>
