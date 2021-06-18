import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'
import Asset from '../views/Asset.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/asset/:id',
    name: 'Asset',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    props:  { name: 'id' },
    component: Asset
  }
]

const router = new VueRouter({
  routes
})

export default router
