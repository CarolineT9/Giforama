const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/home/Index.vue') },
      { path: 'favorites', component: () => import('pages/FavoritesView.vue') },
      { path: 'about', component: () => import('pages/AboutView.vue') },
      { path: 'categories', component: () => import('pages/CategoriesView.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
