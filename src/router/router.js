import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    component: () => import('../views/layout/layout'),
    children: [
      {
        // path为空，默认子路由
        path: '',
        name: 'home',
        component: () => import('../views/home/home')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa/qa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
