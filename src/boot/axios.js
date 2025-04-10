import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_GIPHY_API_URL,
  params: {
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
  },
})

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
