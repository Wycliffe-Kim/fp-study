class StudentDB {
  students = [
    {
      firstname: '',
      lastname: '',
      ssn: '111-11-1111'
    },
    {
      firstname: '',
      lastname: '',
      ssn: '222-22-2222'
    },
    {
      firstname: '',
      lastname: '',
      ssn: '333-33-3333'
    },
    {
      firstname: '',
      lastname: '',
      ssn: '444-44-4444'
    },
  ];

  find = (ssn: string) => {
    return this.students.filter((student) => student.ssn === ssn)[0];
  };
}

const studentDB = new StudentDB();

export {
  studentDB
};