import axios from 'axios';

class TestDB {
  async get() {
    const response = await axios.get('/api/get');
    return response.data;
  }
}

export default TestDB;