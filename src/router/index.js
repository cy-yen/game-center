import routes from './routes.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(sessionStorage.getItem('store'))

  next()
})

export default router
