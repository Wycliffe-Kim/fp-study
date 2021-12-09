const _ = require('lodash');

const input = [80, 90, 100];

function average_ip() {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  const average = sum / input.length;
  console.log('average_ip', average);
}

function average_fp() {
  console.log('average_fp', _average_fp(input));
}

const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 }
];

function averageGrade_ip() {
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
}

function averageGrade_fp() {
  const arr = _.chain(enrollment)
    .filter((student) => student.enrolled > 1)
    .map((student) => student.grade)
    .value();
  console.log('averageGrade_fp', _average_fp(arr));
}

function _average_fp(arr) {
  const sum = (total, current) => total + current;
  const total = (arr) => arr.reduce(sum);
  const size = (arr) => arr.length;
  const divide = (a, b) => a / b;
  return divide(total(arr), size(arr));
}

module.exports = {
  average_ip,
  average_fp,
  averageGrade_ip,
  averageGrade_fp
};