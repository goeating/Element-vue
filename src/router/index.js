import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import Table from '@/views/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        { path: '/table', component: Table }
      ]
    }
  ]
})
