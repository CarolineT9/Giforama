import { useGifsStore } from 'src/stores/gifs'
import { useCategoryStore } from 'src/stores/categories'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/home/Index.vue'),
        beforeEnter: async () => {
          const gifsStore = useGifsStore()
          const categoryStore = useCategoryStore()
          categoryStore.selectedCategory = null
          if (!gifsStore.gifs.length) {
            await gifsStore.getGifs()
          }
        },
      },
      { path: 'favorites', component: () => import('pages/favorites/Index.vue') },
      { path: 'about', component: () => import('src/pages/about/Index.vue') },
      {
        path: 'categories',
        component: () => import('pages/categories/Index.vue'),
        beforeEnter: async () => {
          const gifsStore = useGifsStore()
          const categoryStore = useCategoryStore()
          gifsStore.gifs = []
          if (!categoryStore.categories.length) {
            await categoryStore.fetchCategories()
          }
          if (!categoryStore.selectedCategory) {
            await categoryStore.fetchGifsByCategory('action')
          }
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
