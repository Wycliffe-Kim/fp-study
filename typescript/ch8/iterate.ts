function iterate1() {
  const iter = ['S', 't', 'r', 'e', 'a', 'm'][Symbol.iterator]();
  const result = [];
  for (let s of iter) {
    result.push(s);
  }
  console.log('iterate1', result);
}

function iterate2() {
  const iter = 'Stream'[Symbol.iterator]();
  const result = [];
  for (let s of iter) {
    result.push(s);
  }
  console.log('iterate2', result);
}

export {
  iterate1,
  iterate2
};