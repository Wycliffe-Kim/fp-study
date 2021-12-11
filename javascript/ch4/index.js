const { main } = require('../main');
const { currying } = require('./currying');
const { compose1, compose2, compose3 } = require('./compose');
const { partial } = require('./partial');
const { impureAndPure } = require('./impureAndPure');

main([
  currying,
  compose1,
  compose2,
  compose3,
  partial,
  impureAndPure
]);