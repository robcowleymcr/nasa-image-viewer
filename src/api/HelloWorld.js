import axios from 'axios';

export default {
  async getCities () {
    const data = await axios.get('https://api.openaq.org/v1/cities?country=GB');
    return data
  },
}