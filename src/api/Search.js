import axios from 'axios';

export default {
  async performSearch (val) {
    const data = await axios.get(`https://images-api.nasa.gov/search?&media_type=image&q=${val}`);
    return data
  },
  async getAsset (id) {
    const data = await axios.get(`https://images-api.nasa.gov/asset?${id}`);
    return data
  }
}