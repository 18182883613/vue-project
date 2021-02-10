import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/index',
    meta: { title: '首页' },
    component: () => import('../views/layout/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: { title: '首页' },
        component: () => import('../views/layout/index/index.vue')
      },
      {
        path: '/stats',
        name: 'stats',
        meta: { title: '数据统计' },
        component: () => import('../views/layout/stats/index.vue')
      },
      {
        path: '/info',
        name: 'info',
        meta: { title: '信息管理' },
        component: () => import('../views/layout/info/index.vue'),
        children: [
          {
            path: '/info/list',
            name: 'infoList',
            meta: { title: '列表展示' },
            component: () => import('../views/layout/info/index.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 路由拦截
router.beforeEach(function (to, from, next) {
  if (!sessionStorage.getItem('username')) {
    if (to.path !== '/login') {
      next('/login')
    }
  }
  next()
})
export default router
