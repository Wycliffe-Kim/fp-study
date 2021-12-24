import _ from 'lodash';

const input = [80, 90, 100];

const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 }
];

function _average_fp(arr: number[]) {
  const sum = (total: number, current: number) => total + current;
  const total = (arr: number[]) => arr.reduce(sum);
  const size = (arr: number[]) => arr.length;
  const divide = (a: number, b: number) => a / b;
  return divide(total(arr), size(arr));
}

const average = [
  () => {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      sum += input[i];
    }
    const average = sum / input.length;
    console.log('average_ip', average);
  },
  
  () => {
    console.log('average_fp', _average_fp(input));
  },

  () => {
    let totalGrades = 0;
    let totalStudentsFound = 0;
    for (let i = 0; i < enrollment.length; i++) {
      const student = enrollment[i];
      if (student != null && student.enrolled > 1) {
        totalGrades += student.grade;
        totalStudentsFound++;
      }
    }

    const average = totalGrades / totalStudentsFound;
    console.log('averageGrade_ip', average);
  },

  () => {
    const arr = _.chain(enrollment)
      .filter((student) => student.enrolled > 1)
      .map((student) => student.grade)
      .value();
    console.log('averageGrade_fp', _average_fp(arr));
  }
];

export default average;