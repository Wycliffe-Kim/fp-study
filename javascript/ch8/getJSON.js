const axios = require('axios');

function getJSONCallback(url, success, fail) {
  axios.get(url)
  .then((res) => success(res.data))
  .catch((err) => fail(err));
}

function getJSONPromise(url) {
  return new Promise((resolve, reject) => 
    axios.get(url)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err)));
}

module.exports = {
  getJSONCallback,
  getJSONPromise
};