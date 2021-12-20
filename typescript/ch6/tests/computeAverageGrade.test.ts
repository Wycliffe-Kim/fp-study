import { computeAverageGrade, fork, toLetterGrade } from '../computeAverageGrade';
import R from 'ramda';

test('평균 학점을 계산', () => {
  expect(computeAverageGrade([80, 90, 100])).toBe('A');
});

test('toLetterGrade', () => {
  expect(toLetterGrade(90)).toBe('A');
  expect(toLetterGrade(80)).toBe('B');
  expect(toLetterGrade(70)).toBe('C');
  expect(toLetterGrade(60)).toBe('D');
  expect(toLetterGrade(50)).toBe('F');
});

test('fork', () => {
  const timesTwo = fork((x: number) => x + x, R.identity, R.identity);
  expect(timesTwo(1)).toBe(2);
  expect(timesTwo(2)).toBe(4);
});