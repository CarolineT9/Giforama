<script setup>
import TitleSection from 'src/components/ux/TitleSection.vue';
import AboutView from './AboutView.vue';
</script>
<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800">
    <TitleSection :title="'Sobre'" :subtitle="'Informações sobre o adicionais do projeto'"/>
    <AboutView/>
  </div>
  
</template>
