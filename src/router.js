import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layout/Home.vue'
import About from '@/components/layout/About.vue'
import Signup from '@/components/layout/Signup.vue'
import Login from '@/components/layout/Login.vue'
import Password from '@/components/layout/Password.vue'
import Alllessons from '@/components/layout/Alllessons.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/PasswordReset',
      name: 'Password',
      component: Password
    },

    {
      path: '/Alllessons',
      name: 'AllLessons',
      component: Alllessons
    },
  ]
  
})


