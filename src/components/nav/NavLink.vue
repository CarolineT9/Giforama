<template>
  <router-link 
    :to="path" 
    class="flex items-center text-white hover:text-gray-300 transition-colors duration-200 group"
    active-class="text-purple-500"
  >
    <q-icon 
      :name="iconName" 
      size="20px" 
      class="mr-2 transition-colors duration-200"
      :class="{ 'text-purple-500': $route.path === path }"
    />
    <span class="relative">
      {{ title }}
      <span 
        class="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"
        :class="{ 'w-full': $route.path === path }"
      ></span>
    </span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: String,
  path: String
})

const $route = useRoute()

// Mapeia os títulos para ícones do Quasar
const iconName = computed(() => {
  switch(props.title) {
    case 'Home': return 'home'
    case 'Favoritos': return 'favorite'
    case 'Categorias': return 'category'
    case 'Sobre': return 'info'
    default: return 'circle'
  }
})
</script>