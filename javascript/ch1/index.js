const average = require('./average');
const power = require('./power');
const showStudent = require('./showStudent');
const main = require('../main');

main([
  ...power,
  ...showStudent,
  ...average
]);