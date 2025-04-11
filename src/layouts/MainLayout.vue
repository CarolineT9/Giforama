<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-neutral-950 text-white">
      <q-toolbar class="flex justify-between items-center h-16 px-4">
        <div class="flex items-center">
          <q-avatar>
            <img src="../assets/logo.png">
          </q-avatar>
          <p class="ml-2 text-lg font-medium">
            Caroline Tavares
          </p>
        </div>
        <div class="hidden md:flex space-x-8">
          <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" class="relative group" />
        </div>
        <q-btn dense flat round icon="menu" class="md:hidden" @click="toggleMobileMenu" />
      </q-toolbar>
    </q-header>
    <div v-if="mobileMenuOpen" class="md:hidden bg-neutral-900 py-2 px-4 space-y-2">
      <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" class="block py-2" />
    </div>
    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLink from 'src/components/nav/NavLink.vue'

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const navLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Favoritos",
    path: "/favorites"
  },
  {
    title: "Categorias",
    path: "/categories"
  },
  {
    title: "Sobre",
    path: "/about"
  }
]
</script>