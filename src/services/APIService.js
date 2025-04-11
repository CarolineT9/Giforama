// src/services/APIService.js
import { api } from 'boot/axios'

const getTrendingGifs = async () => {
  const response = await api.get('/gifs/trending')
  return response
}
const searchGifs = (query) => api.get('/gifs/search', { params: { q: query } })
const getCategory = async () => await api.get(`/gifs/categories?`)
const getGifById = async (id) => await api.get(`/gifs/${id}?`)

export default {
  getTrendingGifs,
  searchGifs,
  getCategory,
  getGifById,
}
