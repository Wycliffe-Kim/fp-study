import { StudentDB } from './db';
import fp from 'lodash/fp';

const studentDB = new StudentDB();
const ssn = '444-44-4444';

function showStudent_ip() {
  const student = studentDB.find(ssn);
  if (student != null) {
    console.log('showStudent_ip', `${student.ssn}, ${student.firstname}, ${student.lastname}`);
  } else {
    throw new Error('학생을 찾을 수 없습니다.');
  }
}

function showStudent_fp() {
  const findFrom = fp.curry((db: any, id: string) => {
    const obj = db.find(id);
    if (obj == null) {
      throw new Error('학생을 찾을 수 없습니다.');
    }

    return obj;
  });

  const makeString = (student: any) => `${student.ssn}, ${student.firstname}, ${student.lastname}`;
  const log = (info: string) => console.log('showStudent_fp', info);

  const showStudent = fp.compose(
    log,
    makeString,
    findFrom(studentDB)
  );

  showStudent(ssn);
}

export {
  showStudent_ip,
  showStudent_fp
};