import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/HomePage.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/AboutPage.vue'),
      meta: {
        title: 'About',
      },
    },
    {
      name: 'products',
      path: '/products',
      component: () => import('@/views/ProductsPage.vue'),
      meta: {
        title: 'Products',
      },
    },
    {
      name: 'product',
      path: '/products/:id',
      component: () => import('@/views/SingleProduct.vue'),
    },
  ],
})

router.beforeEach((to) => {
  if (to.name === 'product') document.title = `Comfy- ${to.query.title}`
  else document.title = `Comfy- ${to.meta.title}`
})

export default router
