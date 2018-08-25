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
  mode: 'history',
  routes: [
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
