const axios = require('axios');

class TestDB {
  async get() {
    const response = await axios.get('/api/get');
    return response.data;
  }
}

module.exports = {
  TestDB
};