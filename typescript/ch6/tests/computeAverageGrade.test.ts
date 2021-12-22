import { computeAverageGrade, fork, toLetterGrade } from '../computeAverageGrade';
import R from 'ramda';
import fc from 'fast-check';

fc.resetConfigureGlobal();

test('computeAverageGrade Example Based Test', () => {
  expect(computeAverageGrade([80, 90, 100])).toBe('A');
});

test('computeAverageGrade Property Based Test', () => {
  fc.assert(
    fc.property(fc.array(fc.integer({ min: 90, max: 100 }), { minLength: 1 }), (data) => {
      expect(computeAverageGrade(data)).toBe('A');
    })
  );
});

test('toLetterGrade', () => {
  expect(toLetterGrade(90)).toBe('A');
  expect(toLetterGrade(80)).toBe('B');
  expect(toLetterGrade(70)).toBe('C');
  expect(toLetterGrade(60)).toBe('D');
  expect(toLetterGrade(50)).toBe('F');
});

test('fork', () => {
  const timesTwo = fork((x: number, y: number) => x + y, R.identity, R.identity);
  expect(timesTwo(1)).toBe(2);
  expect(timesTwo(2)).toBe(4);
});
