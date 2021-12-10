const { main } = require('../main');
const { currying } = require('./currying');
const { compose } = require('./compose');

main([
  currying,
  compose
]);