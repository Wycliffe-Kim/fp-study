const { Wrapper } = require('./Wrapper');
const fp = require('lodash/fp');

const functor = [
  () => {
    const wrap = (val) => Wrapper(val);
    const wrappedValue = wrap('Get Functional');
    console.log(wrappedValue.map(fp.identity));
    console.log(wrappedValue.map(fp.toUpper));
  },
  
  () => {
    const plus = fp.curry((a, b) => a + b);
    const plus3 = plus(3);
    const two = Wrapper(2);
    const five = two.fmap(plus3);
    five.map(console.log);
  
    const plus10 = plus(10);
    const fifteen = two.fmap(plus3).fmap(plus10);
    fifteen.map(console.log);
  }
];

module.exports = functor;