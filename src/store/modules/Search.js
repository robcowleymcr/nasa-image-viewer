import Search from '../../api/Search';

// state
const state = () => ({
  searchResults: []
})

// getters
const getters = {}

// actions
const actions = {
  async performSearch({commit}, val) {
    const response = await Search.performSearch(val);
    const results = response.data.collection.items;
    commit('setSearchResults', results);
  },
  async getAsset({commit}, val) {
    const response = await Search.getAsset(val);
    const results = response.data.collection.items;
    commit('getAsset', results);
    return results;
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