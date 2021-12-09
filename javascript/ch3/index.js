const { main } = require('../main');
const { filter_fp, filter_ip } = require('./filter');
const { map_fp, map_ip } = require('./map');
const { reduce_fp, reduce_ip } = require('./reduce');
const { sort_fp, sort_ip } = require('./sort');
const { treeTraversal_fp } = require('./treeTraversal');

main([
  map_ip,
  map_fp,
  reduce_ip,
  reduce_fp,
  filter_ip,
  filter_fp,
  sort_ip,
  sort_fp,
  treeTraversal_fp
]);