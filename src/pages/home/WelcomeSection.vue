<template>
  <section class="py-16 px-4 md:px-8" ref="welcomeSection">
    <div class="max-w-6xl mx-auto">
      <Transition appear enter-active-class="transition duration-1000 ease-out"
        enter-from-class="opacity-0 translate-y-10" enter-to-class="opacity-100 translate-y-0">
        <div class="text-center">
          <h1
            class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
            Bem-vindo ao Giforama
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra, Compartilhe e favorite os melhores GIFs.
          </p>
        </div>
      </Transition>
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
