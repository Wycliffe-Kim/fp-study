import { StudentDB, findFromDB } from '../../ch1/db';


describe('showStudent', () => {
  let db: StudentDB;
  let fullname: (student: any) => string;
  let result: string;
  let ssn: string;
  
  beforeEach(() => {
    db = new StudentDB();
    fullname = (student: any) => `${student.firstname}, ${student.lastname}, ${student.ssn}`;
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