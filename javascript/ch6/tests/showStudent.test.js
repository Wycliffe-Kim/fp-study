const { StudentDB, findFromDB } = require('../../ch1/db');

describe('showStudent', () => {
  let db;
  let fullname;
  let result;
  let ssn;

  beforeEach(() => {
    db = new StudentDB();
    fullname = (student) => `${student.firstname}, ${student.lastname}, ${student.ssn}`;
    ssn = '444-44-4444';
    result = `studentD, D, ${ssn}`;
  });
  
  it('from function', () => {
    const student = findFromDB(db, ssn);
    expect(fullname(student)).toBe(result);
  });
  
  it('from method', () => {
    const student = db.find(ssn);
    expect(fullname(student)).toBe(result);
  });
});