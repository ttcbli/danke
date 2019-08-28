import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//加载主页
import Index from './views/Index.vue'
//加载登录
import Login from './views/Userlogin.vue'
//加载登录注册
import Reg from './views/Userreg.vue'
//加载搜索页
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
