class StudentDB {
  students = [
    {
      firstname: 'studentA',
      lastname: 'A',
      ssn: '111-11-1111'
    },
    {
      firstname: 'studentB',
      lastname: 'B',
      ssn: '222-22-2222'
    },
    {
      firstname: 'studentC',
      lastname: 'C',
      ssn: '333-33-3333'
    },
    {
      firstname: 'studentD',
      lastname: 'D',
      ssn: '444-44-4444'
    },
  ];

  find = (ssn) => {
    return this.students.filter((student) => student.ssn === ssn)[0];
  };
}

const findFromDB = (db, ssn) => db.students.filter((student) => student.ssn === ssn)[0];

module.exports = {
  StudentDB,
  findFromDB
};