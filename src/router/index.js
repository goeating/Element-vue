import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Add from '@/views/goods/Add'
import Sale from '@/views/goods/Sale'
import Table from '@/views/Table'

Vue.use(Router)
// 欢迎页
// 商品管理
//   添加商品
//   在售商品
//   商品类别
//   商品库
// 订单管理
//   订单列表
// 用户管理
//   用户列表
//   用户角色
//   用户财富？
// 代理管理
//   申请列表
//   代理列表

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      isHidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      isHidden: true
    },
    // 欢迎页
    {
      path: '/',
      name: '管理中心',
      component: Home,
      isOnlyNode: true,
      children: [
        {
          path: '/index',
          name: '欢迎页',
          component: Table
        }
      ]
    },
    // 商品管理
    {
      path: '/',
      name: '商品管理',
      component: Home,
      children: [
        {
          path: '/add',
          name: '添加商品',
          component: Add
        },
        {
          path: '/sale',
          name: '在售商品',
          component: Sale
        },
        {
          path: '/category',
          name: '商品类别',
          component: Table
        },
        {
          path: '/goods',
          name: '商品库',
          component: Table
        }
      ]
    },
    // 订单管理
    {
      path: '/',
      name: '订单管理',
      component: Home,
      children: [
        {
          path: '/order',
          name: '订单列表',
          component: Table
        }
      ]
    },
    // 用户管理
    {
      path: '/',
      name: '用户管理',
      component: Home,
      children: [
        {
          path: '/user',
          name: '用户列表',
          component: Table
        },
        {
          path: '/role',
          name: '用户角色',
          component: Table
        }
      ]
    },
    // 代理管理
    {
      path: '/',
      name: '代理管理',
      component: Home,
      children: [
        {
          path: '/apply',
          name: '申请列表',
          component: Table
        },
        {
          path: '/agent',
          name: '代理列表',
          component: Table
        }
      ]
    }
  ]
})
