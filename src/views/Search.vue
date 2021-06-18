<template>
  <div class="search">
    <b-container class="py-3">
      <b-row>
        <b-col cols="12">
          <h1 class="mb-4">NASA Search</h1>
          <b-row class="justify-content-md-center">
            <b-col cols="3">
              <b-form-input width="200" class="mb-4" v-model="searchString" @input.native="onChange" placeholder="Search"></b-form-input>
            </b-col>

          </b-row>
        </b-col>
      </b-row>
      <b-row v-if="searchResults.length !== 0">
        <h2 class="mb-4">Results</h2>
        <b-col cols="4" lg="3" xl="2" v-for="(result, index) in itemsForList" :key="index">
          <b-img @click="$router.push(`/asset/${result.data[0].nasa_id}`)" thumbnail :src="result.links[0].href" />
        </b-col>
        <b-col cols="12" class="pt-4">
          <b-pagination
            v-if="searchResults.length > 0"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="itemList"
            align="center"
          />
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
      currentPage: 1,
      perPage: 10,
      rows: 0,
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
    }),
    itemsForList() {
      return this.searchResults.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    }
  },
  methods: {
    onChange(e) {
      const val = e.target.value;
      this.$store.dispatch('Search/performSearch', val)
      .then(() => {
        this.rows = this.searchResults.length;
      })
    }
  },
  mounted() {
    this.$store.dispatch('Search/clearSearch')
  }
}
</script>
