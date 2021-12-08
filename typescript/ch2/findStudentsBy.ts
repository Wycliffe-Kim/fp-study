import { Address } from './Address';
import { Student_fp, Student_oop } from './Student';

function findStudentsBy_oop() {
  const curry = new Student_oop('Haskell', 'Curry', '111-11-1111', 'Penn State');
  curry.address = new Address('US');

  const turing = new Student_oop('Alan', 'Turing', '222-22-2222', 'Princeton');
  turing.address = new Address('England');

  const church = new Student_oop('Alonzo', 'Church', '333-33-3333', 'Princeton');
  church.address = new Address('US');

  const kleene = new Student_oop('Stephen', 'Kleene', '444-44-4444', 'Princeton');
  kleene.address = new Address('US');

  console.log('findStudentBy_oop', church.studentsInSameCountryAndSchool([curry, turing, kleene]));
}

function findStudentsBy_fp() {
  const curry = new Student_fp('Haskell', 'Curry', '111-11-1111', 'Penn State');
  curry.address = new Address('US');

  const turing = new Student_fp('Alan', 'Turing', '222-22-2222', 'Princeton');
  turing.address = new Address('England');

  const church = new Student_fp('Alonzo', 'Church', '333-33-3333', 'Princeton');
  church.address = new Address('US');

  const kleene = new Student_fp('Stephen', 'Kleene', '444-44-4444', 'Princeton');
  kleene.address = new Address('US');

  const selector = (country: string, school: string) => (student: Student_fp) => student.address.country == country && student.school == school;
  const findStudentsBy = (friends: Student_fp[], selector: (student: Student_fp) => boolean) => friends.filter(selector);
  console.log('findStudentsBy_fp', findStudentsBy([curry, turing, kleene], selector(church.address.country, church.school)));
}

export {
  findStudentsBy_oop,
  findStudentsBy_fp
};