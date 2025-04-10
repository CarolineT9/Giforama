<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">

    <WelcomeSection />
    <GaleryGif />

  </div>
</template>

<script setup>
import WelcomeSection from './WelcomeSection.vue';
import GaleryGif from './GaleryGif.vue';



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
