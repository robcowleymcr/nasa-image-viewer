<template>
  <div class="asset">
    <b-container>
      <b-row>
        <b-col cols="2">
          <div class="float-right">Go Back</div>
        </b-col>
          
        <b-col cols="10">
          <h1>{{ this.title }}</h1>
          <p>{{ this.description }}</p>
        </b-col>
        <b-col cols="12">
          <b-img fluid :src="imgHref" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';

export default {
  name: 'Asset',
  data() {
    return {
      title: '',
      description: '',
      imgHref: ''
    }
  },
  computed: {
    ...mapState({
      searchResults: state => state.Search.searchResults
    })
  },
  async mounted() {
    if(this.searchResults.length === 0) {
      this.$router.push('/')
    } else {
      let clickedAsset = this.searchResults.find(x => x.data[0].nasa_id === this.$route.params.id);
      let response = await axios.get(clickedAsset.href);
      this.title = clickedAsset.data[0].title;
      this.description = clickedAsset.data[0].description;
      this.imgHref = response.data.find(x => x.includes('.jpg'));
    }
  }
}
</script>
