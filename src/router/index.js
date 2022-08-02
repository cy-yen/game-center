import routes from './routes.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(sessionStorage.getItem('store'))
  if (auth?.userInfo && auth?.userInfo.token) {
    return next()
  } else {
    if (to.name != 'login' && to.name != 'register' && to.name != 'home') {
      Toast.fail('请登录')
      return next('/login')
    }
  }
  next()
})

export default router
