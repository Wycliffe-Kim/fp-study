const iterate = [
  () => {
    const iter = ['S', 't', 'r', 'e', 'a', 'm'][Symbol.iterator]();
    const result = [];
    for (let s of iter) {
      result.push(s);
    }
    console.log('iterate1', result);
  },
  
  () => {
    const iter = 'Stream'[Symbol.iterator]();
    const result = [];
    for (let s of iter) {
      result.push(s);
    }
    console.log('iterate2', result);
  }
];

export default iterate;