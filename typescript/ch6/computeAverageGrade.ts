import fp from 'lodash/fp';
import R from 'ramda';

type Func1 = (value: any) => any;
type Func2 = Func1;
const fork = (join: any, func1: Func1, func2: Func2) => (value: any) => join(func1(value), func2(value));

const toLetterGrade = (grade: number) => {
  if (grade >= 90) {
    return 'A';
  }
  if (grade >= 80) {
    return 'B';
  }
  if (grade >= 70) {
    return 'C';
  }
  if (grade >= 60) {
    return 'D';
  }
  return 'F';
};

const computeAverageGrade = fp.compose(toLetterGrade, fork(R.divide, R.sum, R.length));

export {
  fork,
  toLetterGrade,
  computeAverageGrade
};