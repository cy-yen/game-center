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
    const noAuth = ['login', 'register', 'home', 'gameInfo']
    if (!noAuth.includes(to.name)) {
      Toast.fail('请登录')
      return next('/login')
    }
  }
  next()
})

export default router
