import Vue from 'vue'
import Router from 'vue-router'

const Goods = () => import('@/view/goods/goods.vue')
const Seller = () => import('@/view/seller/seller.vue')
const Star = () => import('@/view/star/star.vue')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/seller',
    component: Seller
  },
  {
    path: '/star',
    component: Star
  },
]

export default new Router({
  mode: 'history',
  routes
})
