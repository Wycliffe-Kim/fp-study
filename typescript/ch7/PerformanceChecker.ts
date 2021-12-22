import fp from 'lodash/fp';

const CHECKER_TIME_TYPE = {
  SEC: 'sec',
  MS: 'ms',
  US: 'us'
} as const;
type CHECKER_TIME_TYPE = typeof CHECKER_TIME_TYPE[keyof typeof CHECKER_TIME_TYPE];

class PerformanceChecker {
  begin: number;
  end: number;
  name: string;
  accumulateMode: boolean;
  accumulateTime: number;
  digit: number;
  
  constructor(name: string, accumulateMode: boolean, digit: number) {
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

const propSet = fp.curry((obj: any, prop: any, data: any) => {
  obj[prop] = data;
  return obj;
});

const currentTime = () => Date.now();

const resetCheckerAccumulate = (checker: PerformanceChecker) => new PerformanceChecker(checker.name, false, checker.digit);

const startChecker = fp.curry((accumulateMode: boolean, digit: number, name: string) => 
  propSet(new PerformanceChecker(name, accumulateMode, digit), 'begin', currentTime()));

const stopChecker = (checker: PerformanceChecker) => 
  propSet(checker, 'end', currentTime());

const diffChecker = (checker: PerformanceChecker) => 
  checker.accumulateMode == false ? checker.difference : checker.accumulateTime;

const diffStringChecker = fp.curry((checkerTimeType: CHECKER_TIME_TYPE, checker: PerformanceChecker) => {
  let diff = diffChecker(checker);
  let unit = 'ms';
  switch (checkerTimeType) {
    case CHECKER_TIME_TYPE.SEC:
      diff /= 1000;
      unit = 's';
      break;
    case CHECKER_TIME_TYPE.US:
      diff *= 1000;
      unit = 'us';
      break;
  }
  return `${diff.toFixed(checker.digit)}${unit}`;
});

const logChecker = fp.curry((checkerTimeType: CHECKER_TIME_TYPE, checker: PerformanceChecker) => 
  console.log(`${checker.name}: ${diffStringChecker(checkerTimeType, checker)}`));

const mapBetweenChecker = fp.curry((func: any, checker: PerformanceChecker) => {
  func();
  return checker;
});

export {
  CHECKER_TIME_TYPE,
  PerformanceChecker,
  resetCheckerAccumulate,
  startChecker,
  stopChecker,
  diffChecker,
  diffStringChecker,
  logChecker,
  mapBetweenChecker
};