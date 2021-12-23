const fp = require('lodash/fp');
const { logChecker, mapBetweenChecker, startChecker, stopChecker } = require('./PerformanceChecker');

const checkPerformance = (name, func) => fp.compose(
  logChecker('ms'),
  stopChecker,
  mapBetweenChecker(func),
  startChecker(false, 0),
)(name);

module.exports = checkPerformance;