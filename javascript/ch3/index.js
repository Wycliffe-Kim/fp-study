const main = require('../main');
const filter = require('./filter');
const map = require('./map');
const reduce = require('./reduce');
const sort = require('./sort');
const treeTraversal = require('./treeTraversal');

main([
  ...map,
  ...reduce,
  ...filter,
  ...sort,
  treeTraversal
]);