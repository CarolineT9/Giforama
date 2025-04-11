<template>
  <div class="max-w-4xl mx-auto px-4 md:px-8 py-12">
    <div class="grid md:grid-cols-2 gap-8">

      <div class="bg-neutral-750 dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 class="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
          <span class="mdi mdi-account-circle-outline mr-2"></span>
          Sobre Mim
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          Desenvolvedora front-end com experiência em Vue.js 2 e 3, especializada na criação de interfaces dinâmicas, 
          responsivas e focadas na melhor experiência do usuário. 
          Sou movida por desafios e estou constantemente estudando e explorando novas tecnologias para me manter
           atualizada. Tenho facilidade para trabalhar em equipe, 
          sou comunicativa, proativa e organizada.
           No tempo livre, gosto de ouvir música, jogar videogame, ir à academia e correr.
        </p>
        <div class="mt-6">
          <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Tecnologias  nesse projeto:</h4>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Vue
              3</span>
            <span
              class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">Tailwind</span>
            <span
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Pinia</span>
            <span
              class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Quasar</span>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <div class="bg-neutral dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400 flex items-center">
            <span class="mdi mdi-code-json mr-2"></span>
            Estrutura Técnica
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            Arquitetura modular com Pinia para gestão de estado global, combinado com Vue Router para navegação
            eficiente entre views.
          </p>
        </div>

        <div class="bg-neutral dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400 flex items-center">
            <span class="mdi mdi-lightbulb-on-outline mr-2"></span>
            Soluções Implementadas
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            Visualização de GIFs em alta qualidade com carregamento otimizado.
            Sistema persistente de favoritos usando localStorage.
            Navegação fluida entre diferentes categorias.
            Design responsivo que se adapta a qualquer dispositivo.
          </p>
        </div>

        <div class="bg-neutral dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center">
            <span class="mdi mdi-road-variant mr-2"></span>
            Próximas Etapas
          </h3>
          <p class="text-gray-700 dark:text-gray-300">
            Implementação de testes e containirização com Docker .
          </p>
        </div>
      </div>
    </div>
  </div>
</template>