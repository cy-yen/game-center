const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: () => import('../pages/Home.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    path: '/controls',
    name: 'controls',
    component: () => import('../pages/Controls.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../pages/Game.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../pages/Table.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    path: '/vip',
    name: 'vip',
    component: () => import('../pages/VIP.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  }
]

export default routes
