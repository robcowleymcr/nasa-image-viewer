import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import Asset from '../views/Asset.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/asset/:id',
    name: 'Asset',
    props:  { name: 'id' },
    component: Asset
  }
]

const router = new VueRouter({
  routes
})

export default router
