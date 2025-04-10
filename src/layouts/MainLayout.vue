<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-neutral-950 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex">
          <q-avatar >
            <img src="../assets/logo.png" >
          </q-avatar>
          <p class="ml-2 ">
            Caroline Tavares
          </p>
          
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated class="bg-neutral-950">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="bg-black">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>