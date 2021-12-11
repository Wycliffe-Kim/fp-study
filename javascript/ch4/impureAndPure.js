const { StudentDB } = require('../ch1/db');
const fp = require('lodash/fp');

function impureAndPure() {
  const find = (db, id) => db.students.filter((student) => student.ssn === id)[0];
  const findObject = fp.curry((db, id) => {
    const obj = find(db, id);
    if (obj == null) {
      throw new Error(`ID가 [${id}]인 객체는 없습니다.`);
    }

    return obj;
  });

  const db = new StudentDB();
  const findStudent = findObject(db);
  const fullInfo = ({ firstname, lastname, ssn }) => 
                      `${ssn}, ${firstname}, ${lastname}`;
  const append = fp.curry((error, info) => console.log(error ? 'error' : 'info', info));

  const showStudent = fp.compose(
    append(false),
    fullInfo,
    findStudent
  );

  showStudent('444-44-4444');
}

module.exports = {
  impureAndPure
}