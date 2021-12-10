import R from 'ramda';

function compose() {
  const str = 'We can only see a short distance ' +
              'ahead but we can see plenty there ' +
              'that needs to be done';

  const explode = (str: string) => str.split(/\s+/);
  const count = (arr: string[]) => arr.length;
  const countWords = R.compose(count, explode);
  console.log(countWords(str));
}

export {
  compose
};