import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/layout/Home.vue'
import About from '@/components/layout/About.vue'
import Signup from '@/components/layout/Signup.vue'
import Login from '@/components/layout/Login.vue'
import Password from '@/components/layout/Password.vue'
import Alllessons from '@/components/layout/Alllessons.vue'
import Bykey from '@/components/layout/Bykey.vue'
import Beats from '@/components/layout/Beats.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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

    {
      path: '/Beats',
      name: 'Beats',
      component: Beats
    },

    {
      path: '/Bykey/',
      name: 'Bykey',
      component: Bykey,
        children: [
          {
            path: 'DFlat',
            component: Bykey
          },
          {
            path: 'EFlat',
            component: Bykey
          },
          {
            path: 'F',
            component: Bykey
          },
          {
            path: 'GFlat',
            component: Bykey
          }
        ],
    },

    
  ]
  
})


