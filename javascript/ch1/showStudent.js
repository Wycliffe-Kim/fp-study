const { StudentDB } = require('./db');
const fp = require('lodash/fp');

const studentDB = new StudentDB()
const ssn = '444-44-4444';

const showStudent = [
  () => {
    const student = studentDB.find(ssn);
    if (student != null) {
      console.log('showStudent_ip', `${student.ssn}, ${student.firstname}, ${student.lastname}`);
    } else {
      throw new Error('학생을 찾을 수 없습니다.');
    }
  },
  
  () => {
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
];

module.exports = showStudent;