const R = require('ramda');
const { IO } = require('../ch5/IO');
const average = require('./average');
const { getJSONPromise } = require('./getJSON');

function promise() {
  const log = R.curry((title, message) => console.log(title, message));

  getJSONPromise('http://localhost:5555/students')
  .then(R.map((student) => student.grade))
  .then(average)
  .then((grade) => IO.of(grade).map(log('promise success')).run())
  .catch((error) => log('promise fail', error));
}

module.exports = promise;