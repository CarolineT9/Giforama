<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-neutral-950 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex">
          <q-avatar>
            <img src="../assets/logo.png">
          </q-avatar>
          <p class="ml-2 ">
            Caroline Tavares
          </p>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated class="bg-neutral-950">
      <q-list>
        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link"/>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLink from 'src/components/nav/NavLink.vue'
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const navLinks = [
  {
    title: "Home",
    icon: 'mdi-home',
    path: "/"
  },
  {
    title: "Favoritos",
    icon: 'mdi-heart',
    path: "/favorites"
  },
  {
    title: "Categorias",
    icon: 'mdi-image-album',
    path: "/categories"
  },
  {
    title: "About",
    icon: 'mdi-information',
    path: "/about"
  }
]

</script>