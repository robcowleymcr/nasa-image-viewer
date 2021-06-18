import Search from '../../api/Search';

// state
const state = () => ({
  searchResults: [],
})

// getters
const getters = {}

// actions
const actions = {
  async performSearch({commit}, val) {
    const response = await Search.performSearch(val);
    const results = response.data.collection.items;
    // const tumbLinks = results.forEach()
    // console.log(results)
    commit('setSearchResults', results);
  }
}

// mutations
const mutations = {
  setSearchResults (state, results) {
    state.searchResults = results;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}