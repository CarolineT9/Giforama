import { defineStore, acceptHMRUpdate } from 'pinia'
import { onMounted, ref } from 'vue'
import APIService from 'src/services/APIService'
export const useGifsStore = defineStore('gifs', () => {
  const gifs = ref([])

  async function getGifs() {
    const { data } = await APIService.getTrendingGifs()
    gifs.value = data.data
  }

  async function searchGifs(query) {
    const { data } = await APIService.searchGifs(query)
    gifs.value = data.data
  }
  onMounted(() => {
    getGifs()
  })
  return {
    gifs,
    getGifs,
    searchGifs,
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGifsStore, import.meta.hot))
}
