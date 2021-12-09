const { average_ip, average_fp, averageGrade_ip, averageGrade_fp } = require('./average');
const { power_ip, power_fp } = require('./power');
const { showStudent_ip, showStudent_fp } = require('./showStudent');
const { main } = require('../main');

main([
  power_ip,
  power_fp,
  showStudent_ip,
  showStudent_fp,
  average_ip,
  average_fp,
  averageGrade_ip,
  averageGrade_fp
]);