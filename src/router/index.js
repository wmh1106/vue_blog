import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create'
import Details from '@/pages/Details'
import Edit from '@/pages/Edit'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import My from '@/pages/My'
import Register from '@/pages/Register'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
