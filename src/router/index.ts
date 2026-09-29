import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: import('@/views/HomePage.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      name: 'about',
      path: '/about',
      component: import('@/views/AboutPage.vue'),
      meta: {
        title: 'About',
      },
    },
    {
      name: 'products',
      path: '/products',
      component: import('@/views/ProductsPage.vue'),
      meta: {
        title: 'Products',
      },
    },
  ],
})

router.beforeEach((from, _, next) => {
  document.title = `Comfy- ${from.meta.title}`
  next()
})

export default router
