import Vue from 'vue'
import Vuex from 'vuex'
import Search from './modules/Search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Search
  }
})