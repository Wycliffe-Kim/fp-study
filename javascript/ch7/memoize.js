const fp = require('lodash/fp');
const _ = require('lodash');
const checkPerformance = require('./checkPerformance');

function memoize() {
  // FP 에서는 이런 식으로 외부 변수가 있으면 안 되지만 테스트 결과를 위해서 임시로 사용한다..
  let count = 0;
  const add = (a, b) => {
    count += 1;
    return a + b;
  }
  const addMemoized = fp.memoize(add);

  const logCount = () => console.log(count);
  const resetCount = () => { count = 0; }
  const loop = (func) => _.range(10000000).forEach(func);
  const checkPerformancePlusCount = (name, func) => fp.compose(
    logCount,
    () => checkPerformance(name, func),
    resetCount
  )();

  checkPerformancePlusCount('add', () => loop(() => add(1, 2)));
  checkPerformancePlusCount('addMemoized', () => loop(() => addMemoized(1, 2)));
  
}

module.exports = {
  memoize
};