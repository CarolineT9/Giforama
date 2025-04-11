
<script setup>
import CategoryGalery from "./CategoryGalery.vue";
import TitleSection from "src/components/ux/TitleSection.vue";
</script>
<template>
 <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">
    <TitleSection :title="'Categorias'" :subtitle="'Busque seus gifs por categorias'"/>
    <CategoryGalery />
  </div>

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
