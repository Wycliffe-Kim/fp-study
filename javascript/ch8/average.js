const fp = require('lodash/fp');
const R = require('ramda');
const { fork } = require('../ch6/computeAverageGrade');

const average = fp.compose(
  Math.ceil,
  fork(R.divide, R.sum, R.length)
);

module.exports = average;