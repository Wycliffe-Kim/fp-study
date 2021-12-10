const R = require('ramda');

function compose() {
  const str = 'We can only see a short distance ' +
              'ahead but we can see plenty there ' +
              'that needs to be done';

  const explode = (str) => str.split(/\s+/);
  const count = (arr) => arr.length;
  const countWords = R.compose(count, explode);
  console.log(countWords(str));
}

module.exports = {
  compose
};