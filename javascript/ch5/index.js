const main = require('../main');
const functor = require('./functor');
const monad = require('./monad');

main([
  ...functor,
  ...monad,
]);