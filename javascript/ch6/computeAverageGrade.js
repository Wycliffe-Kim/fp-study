const R = require('ramda');

const fork = (join, func1, func2) => (value) => join(func1(value), func2(value));

const toLetterGrade = (grade) => {
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
}

const computeAverageGrade = R.compose(toLetterGrade, fork(R.divide, R.sum, R.length));

module.exports = {
  fork,
  toLetterGrade,
  computeAverageGrade
};