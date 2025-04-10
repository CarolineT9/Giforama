import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, onMounted, watch } from 'vue'
import APIService from 'src/services/APIService'
export const useGifsStore = defineStore('gifs', () => {
  const gifs = ref([])
  const categories = ref([])
  const selectedCategory = ref(null)

  const getGifs = async () => {
    const { data } = await APIService.getTrendingGifs()
    gifs.value = data.data
  }

  const searchGifs = async (query) => {
    const { data } = await APIService.searchGifs(query)
    gifs.value = data.data
  }

  const fetchCategories = async () => {
    const { data } = await APIService.getCategory()
    categories.value = data.data
  }

  const selectCategoryAndSearch = async (categoryName) => {
    if (!categories.value.length) {
      await fetchCategories()
    }

    const found = categories.value.find(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase(),
    )
    if (found) {
      selectedCategory.value = found
      await searchGifs(found.name)
    }
  }

  onMounted(() => {
    getGifs()
    fetchCategories()
  })

  watch(selectedCategory, async (category) => {
    if (category?.name) {
      await searchGifs(category.name)
    }
  })

  return {
    gifs,
    getGifs,
    searchGifs,
    categories,
    selectedCategory,
    fetchCategories,
    selectCategoryAndSearch,
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGifsStore, import.meta.hot))
}
