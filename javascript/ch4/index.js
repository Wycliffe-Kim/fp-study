const main = require('../main');
const currying = require('./currying');
const compose = require('./compose');
const partial = require('./partial');
const impureAndPure = require('./impureAndPure');

main([
  currying,
  ...compose,
  partial,
  impureAndPure
]);