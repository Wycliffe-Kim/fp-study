import { studentDB } from './db';
import fp from 'lodash/fp';

function showStudent_oop() {
  const ssn = '444-44-4444';
  let student = studentDB.find(ssn);
  if (student != null) {
    console.log(`${student.ssn}, ${student.firstname}, ${student.lastname}`);
  } else {
    throw new Error('학생을 찾을 수 없습니다.');
  }
}

function showStudent_fp() {
  const ssn = '444-44-4444';
  const findFrom = fp.curry((db: any, id: string) => {
    let obj = db.find(id);
    if (obj == null) {
      throw new Error('학생을 찾을 수 없습니다.');
    }

    return obj;
  });

  const makeString = (student: any) => `${student.ssn}, ${student.firstname}, ${student.lastname}`;
  const log = (info: string) => console.log(info);

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
}