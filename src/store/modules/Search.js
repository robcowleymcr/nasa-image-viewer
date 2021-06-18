import Search from '../../api/Search';

// state
const state = () => ({
  searchResults: []
})

// getters
const getters = {}

// actions
const actions = {
  performSearch({commit}, val) {
    return new Promise((resolve) => {
      Search.performSearch(val)
        .then(response => {
          const results = response.data.collection.items;
          commit('setSearchResults', results);
          resolve();
          return results;
        })
    });
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