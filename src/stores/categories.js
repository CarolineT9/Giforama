import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import APIService from 'src/services/APIService'

export const useCategoryStore = defineStore('categories', () => {
  // Nome alterado para 'categories'
  const categories = ref([])
  const selectedCategory = ref(null)
  const gifs = ref([]) // Alterado de gifsByCategory para gifs
  const isLoading = ref(false)

  async function fetchGifsByCategory(categoryName = 'action') {
    isLoading.value = true
    try {
      const { data } = await APIService.searchGifs(categoryName)
      gifs.value = data.data
      selectedCategory.value = categoryName
    } catch (error) {
      console.error('Error fetching category GIFs:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await APIService.getCategory()
      categories.value = data.data
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  return {
    categories,
    selectedCategory,
    gifs,
    isLoading,
    fetchGifsByCategory,
    fetchCategories,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot))
}
