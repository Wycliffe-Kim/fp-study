import _ from 'lodash';

function* range(start = 0, finish = Number.POSITIVE_INFINITY) {
  for (let i = start; i < finish; i++) {
    yield i;
  }
}

function take(amount: number, generator: Generator) {
  const result = [];
  for (let n of generator) {
    result.push(n);
    if (n === amount) {
      break;
    }
  }
  return result;
}

function* rangeWithSpecification(specification: (value: number) => number, start = 0, finish = Number.POSITIVE_INFINITY) {
  for (let i = start; i < finish; i++) {
    yield specification(i);
  }
}

const lazyCreateData = [
  () => {
    const result = [];
    for (let i of range(1)) {
      result.push(i);
      if (i == 3) {
        break;
      }
    }
    console.log('lazyCreateData1', result);
  },
  
  () => {
    console.log('lazyCreateData2', take(3, range(1, Infinity)));
  },
  
  () => {
    const result = [];
    for (let n of rangeWithSpecification((x: number) => Math.pow(x, 2), 1, 4)) {
      result.push(n);
    }
    console.log('lazyCreateData3', result);
  }
];

export default lazyCreateData;