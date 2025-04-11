import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import APIService from 'src/services/APIService'

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref([])
  const selectedCategory = ref(null)
  const gifs = ref([]) 
  const isLoading = ref(false)

  const fetchGifsByCategory = async (categoryName = 'action') => {
    isLoading.value = true
    try {
      const { data } = await APIService.searchGifs(categoryName)
      gifs.value = data.data
      selectedCategory.value = categories.value.find(cat => 
        cat.name.toLowerCase() === categoryName.toLowerCase()
      ) || categoryName
    } catch (error) {
      console.error('Error fetching category GIFs:', error)
    } finally {
      isLoading.value = false
    }
  }

  const fetchCategories = async () => {
    isLoading.value = true
    try {
      const { data } = await APIService.getCategory()
      categories.value = data.data
    } catch (error) {
      console.error('Error fetching categories:', error)
    } finally {
      isLoading.value = false
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
