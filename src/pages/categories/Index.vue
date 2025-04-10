<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">
    <section class="py-16 px-4 md:px-8" ref="welcomeSection">
      <div class="max-w-6xl w-full">
        <Transition appear enter-active-class="transition duration-1000 ease-out"
          enter-from-class="opacity-0 translate-y-10" enter-to-class="opacity-100 translate-y-0">
          <div class="text-left">
            <h3
              class="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              Categorias
            </h3>
            <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl ">
              Selecione uma categoria
            </p>
          </div>
        </Transition>
      </div>
    </section>
    <CategoryGalery />
  </div>

</template>

<script setup>
import CategoryGalery from "./CategoryGalery.vue";

</script>
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
