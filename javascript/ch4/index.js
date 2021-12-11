const { main } = require('../main');
const { currying } = require('./currying');
const { compose } = require('./compose');
const { partial } = require('./partial');

main([
  currying,
  compose,
  partial
]);