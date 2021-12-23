import fp from 'lodash/fp';
import R from 'ramda';
import { fork } from '../ch6/computeAverageGrade';

const average = fp.compose(
  Math.ceil,
  fork(R.divide, R.sum, R.length)
);

export default average;