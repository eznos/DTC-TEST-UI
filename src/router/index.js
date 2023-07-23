import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import Layout from '@/components/Layout'
import Profile from '../views/edituser/Edituser.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Home,
          name: 'Home'
        },
        {
          path: '/product',
          component: Product,
          name: 'Product'
        },
        {
          path: '/cart',
          component: Cart,
          name: 'Cart'
        },
        { 
          path: '/profile',
          component: Profile,
          name: 'Profile'
        }
      ]
    },

  ],
  mode: 'history'
},

)
