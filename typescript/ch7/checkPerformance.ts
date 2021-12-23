import fp from 'lodash/fp';
import { logChecker, mapBetweenChecker, startChecker, stopChecker } from './PerformanceChecker';

const checkPerformance = (name: string, func: any) => fp.compose(
  logChecker('ms'),
  stopChecker,
  mapBetweenChecker(func),
  startChecker(false, 0),
)(name);

export default checkPerformance;