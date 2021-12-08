import { studentDB } from './db';
import fp from 'lodash/fp';

const ssn = '444-44-4444';
function showStudent_oop() {
  const student = studentDB.find(ssn);
  if (student != null) {
    console.log('showStudent_oop', `${student.ssn}, ${student.firstname}, ${student.lastname}`);
  } else {
    throw new Error('학생을 찾을 수 없습니다.');
  }
}

function showStudent_fp() {
  const findFrom = fp.curry((db, id) => {
    const obj = db.find(id);
    if (obj == null) {
      throw new Error('학생을 찾을 수 없습니다.');
    }

    return obj;
  });

  const makeString = (student) => `${student.ssn}, ${student.firstname}, ${student.lastname}`;
  const log = (info) => console.log('showStudent_fp', info);

  const showStudent = fp.compose(
    log,
    makeString,
    findFrom(studentDB)
  );

  showStudent(ssn);
}

export {
  showStudent_oop,
  showStudent_fp
};