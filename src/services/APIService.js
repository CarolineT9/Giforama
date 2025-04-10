// src/services/APIService.js
import { api } from 'boot/axios'

const getTrendingGifs = async () => {
  const response = await api.get('/gifs/trending')
  return response
}

export default {
  getTrendingGifs,
}
