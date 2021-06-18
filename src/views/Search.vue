<template>
  <div class="search">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1>NASA Search</h1>
          <b-form-input v-model="searchString" @input.native="onChange" placeholder="Search"></b-form-input>
          <h2>Results</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="(result, index) in searchResults" :key="index" cols="2">
          <b-img @click="$router.push(`/asset/${result.data[0].nasa_id}`)" thumbnail :src="result.links[0].href" />
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      searchString: '',
      imageProps: {
          blankColor: '#bbb',
          width: 200,
          height: 150
      }
    }
  },
  computed: {
    ...mapState({
      searchResults: state => state.Search.searchResults
    })
  },
  methods: {
    onChange(e) {
      const val = e.target.value;
      this.$store.dispatch('Search/performSearch', val)
    }
  }
}
</script>
