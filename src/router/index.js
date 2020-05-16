import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Userinfo from '@/views/Userinfo'

Vue.use(VueRouter)

  const routes = [
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
  }
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
