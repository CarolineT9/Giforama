<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">

    <section class="py-16 px-4 md:px-8" ref="welcomeSection">
      <div class="max-w-6xl mx-auto">
        <Transition appear enter-active-class="transition duration-1000 ease-out"
          enter-from-class="opacity-0 translate-y-10" enter-to-class="opacity-100 translate-y-0">
          <div v-if="visibleSections.welcome" class="text-center">
            <h1
              class="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              Bem-vindo ao Giforama
            </h1>
            <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Descubra, Compartilhe e favorite os melhores GIFs
            </p>
          </div>
        </Transition>
      </div>
    </section>
    <section class="py-16 px-4 md:px-8" ref="trendingSection">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Transition v-for="(gif, index) in gifs" :key="gif.id" appear
          enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100" :style="{ transitionDelay: `${index * 100 + 200}ms` }">
          <div v-if="visibleSections.trending"
            class="group transform transition-transform duration-300 hover:-translate-y-1">
            <div
              class="overflow-hidden bg-neutral-900 dark:bg-neutral-700 hover:shadow-xl transition-all duration-300 rounded-lg border border-gray-200 dark:border-neutral-700">
              <div class="relative">
                <img :src="gif.images.original.url" :alt="gif.title || 'GIF sem título'"
                  class="w-full h-48 object-cover" />
                <div class="absolute top-2 right-2">
                  <span class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    {{ gif.rating.toUpperCase() }}
                  </span>
                </div>
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
          </div>
        </Transition>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import APIService from 'src/services/APIService';

const gifs = ref([]);
const visibleSections = reactive({
  welcome: false,
  features: false,
  trending: false
});

onMounted(async () => {
  try {
    const { data } = await APIService.getTrendingGifs();
    console.log(data);
    gifs.value = data.data; // Note que estamos acessando data.data
  } catch (error) {
    console.error('Erro ao carregar GIFs:', error);
  }
});


const welcomeSection = ref(null);
const featuresSection = ref(null);
const trendingSection = ref(null);


onMounted(() => {
  const observerOptions = { threshold: 0.3 };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetRef = entry.target;

        if (targetRef === welcomeSection.value) visibleSections.welcome = true;
        if (targetRef === featuresSection.value) visibleSections.features = true;
        if (targetRef === trendingSection.value) visibleSections.trending = true;

        observer.unobserve(targetRef);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (welcomeSection.value) observer.observe(welcomeSection.value);
  if (featuresSection.value) observer.observe(featuresSection.value);
  if (trendingSection.value) observer.observe(trendingSection.value);
});
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
