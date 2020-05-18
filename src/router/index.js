import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Userinfo from '@/views/Userinfo'
import Edit from '@/views/Edit'
import Video from '@/components/list/Video'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
      path: '/login',
      name: 'Login',
      component: Login
  },
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: Userinfo,
    meta:{
      istoken: true
    }
  },
  {
    path:'/edit',
    name:'Edit',
    component:Edit,
    meta: {
      istoken: true
    }
  },
  {
    path: '/video/:id',
    name: 'Video',
    component: Video
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//判定当没有id和token时，如果设置了meta的istoken为true，返回到登录页
router.beforeEach((to,from,next) => {
  if(!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录！')
    return
  }
  next()
})

export default router
