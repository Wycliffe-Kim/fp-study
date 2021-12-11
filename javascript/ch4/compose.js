const _ = require('lodash');
const fp = require('lodash/fp');
const { normalize } = require('./normalize');
const { trim } = require('./trim');

function compose1() {
  const str = 'We can only see a short distance ' +
              'ahead but we can see plenty there ' +
              'that needs to be done';

  const explode = (str) => str.split(/\s+/);
  const count = (arr) => arr.length;
  const countWords = fp.compose(count, explode);
  console.log(countWords(str));
}

function compose2() {
  const students = ['Rosser', 'Turing', 'Kleene', 'Church'];
  const grades = [80, 100, 90, 99];
  const smartestStudent = fp.compose(
    (data) => data[0],
    fp.head,
    fp.reverse,
    fp.sortBy(fp.prop(1)),
    fp.zip
  );
  console.log(smartestStudent(students, grades));
}

function compose3() {
  const validLength = (len, str) => str.length == len;
  const checkLengthSsn = _.partial(validLength, 9);

  const cleanInput = fp.compose(normalize, trim);
  const isValidSsn = fp.compose(checkLengthSsn, cleanInput);

  console.log(cleanInput('444-44-4444'));
  console.log(isValidSsn('444-44-4444'));
}

module.exports = {
  compose1,
  compose2,
  compose3
};