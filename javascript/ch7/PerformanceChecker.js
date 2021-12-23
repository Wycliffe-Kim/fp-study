const fp = require('lodash/fp');

class CheckerTimeType {
  static sec = 'sec';
  static ms = 'ms';
  static us = 'us';
}

class PerformanceChecker {
  constructor(name, accumulateMode, digit) {
    this.begin = 0;
    this.end = 0;
    this.name = name;
    this.accumulateMode = accumulateMode;
    this.accumulateTime = 0;
    this.digit = digit;
  }

  get difference() {
    return this.end - this.begin;
  }
}

const propSet = fp.curry((obj, prop, data) => {
  obj[prop] = data;
  return obj;
});

const currentTime = () => Date.now();

const resetCheckerAccumulate = (checker) => new PerformanceChecker(checker.name, false, checker.digit);

const startChecker = fp.curry((accumulateMode, digit, name) => 
  propSet(new PerformanceChecker(name, accumulateMode, digit), 'begin', currentTime()));

const stopChecker = (checker) => 
  propSet(checker, 'end', currentTime());

const diffChecker = (checker) => 
  checker.accumulateMode == false ? checker.difference : checker.accumulateTime;

const diffStringChecker = fp.curry((checkerTimeType, checker) => {
  let diff = diffChecker(checker);
  let unit = 'ms';
  switch (checkerTimeType) {
    case CheckerTimeType.sec:
      diff /= 1000;
      unit = 's';
      break;
    case CheckerTimeType.us:
      diff *= 1000;
      unit = 'us';
      break;
  }
  return `${diff.toFixed(checker.digit)}${unit}`;
});

const logChecker = fp.curry((checkerTimeType, checker) => 
  console.log(`${checker.name}: ${diffStringChecker(checkerTimeType, checker)}`));

const mapBetweenChecker = fp.curry((func, checker) => {
  func();
  return checker;
});

module.exports = {
  CheckerTimeType,
  PerformanceChecker,
  resetCheckerAccumulate,
  startChecker,
  stopChecker,
  diffChecker,
  diffStringChecker,
  logChecker,
  mapBetweenChecker
};