import HelloWorld from '../../api/HelloWorld';

// state
const state = () => ({
  cities: [],
})

// getters
const getters = {}

// actions
const actions = {
  async getProducts({commit}) {
    const response = await HelloWorld.getCities();
    const data = response.data.results;
    commit('setCities', data);
  }
}

// mutations
const mutations = {
  setCities (state, cities) {
    state.cities = cities;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}