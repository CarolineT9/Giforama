import { defineStore } from 'pinia'
import { ref } from 'vue'
import APIService from 'src/services/APIService'
export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])
  const gif = ref([])

  async function getGifByid(id) {
    const { data } = await APIService.getGifById(id)
    gif.value = data.data
  }
  function addFavorite(id) {
    getGifByid(id)
    favorites.value.push(gif.value)
  }
  return {
    favorites,
    addFavorite,
  }
})
