class StudentDB {
  students = [
    {
      firstname: 'student',
      lastname: 'A',
      ssn: '111-11-1111'
    },
    {
      firstname: 'student',
      lastname: 'B',
      ssn: '222-22-2222'
    },
    {
      firstname: 'student',
      lastname: 'C',
      ssn: '333-33-3333'
    },
    {
      firstname: 'student',
      lastname: 'D',
      ssn: '444-44-4444'
    },
  ];

  find = (ssn: string) => {
    return this.students.filter((student) => student.ssn === ssn)[0];
  };
}

export {
  StudentDB
};