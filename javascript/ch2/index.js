const { findStudentsBy_fp, findStudentsBy_ip } = require('./findStudentsBy');
const { main } = require('../main');

main([
  findStudentsBy_ip,
  findStudentsBy_fp,
]);