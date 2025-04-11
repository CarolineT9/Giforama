import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {

  const favorites = ref([])
  const loadFavorites = () => {
    const saved = localStorage.getItem('favorites')
    favorites.value = saved ? JSON.parse(saved) : []
  }

  const toggleFavorite = (gif) => {
    const index = favorites.value.findIndex(f => f.id === gif.id)
    if (index === -1) {
      favorites.value.push(gif) 
    } else {
      favorites.value.splice(index, 1) 
    }
  }

  const isFavorite = (id) => {
    return favorites.value.some(f => f.id === id)
  }

  watch(favorites, (newVal) => {
    localStorage.setItem('favorites', JSON.stringify(newVal))
  }, { deep: true })
  loadFavorites()
  
  return {
    favorites,
    toggleFavorite,
    isFavorite,
    loadFavorites
  }
})
