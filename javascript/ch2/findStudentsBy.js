const { Address } = require('./Address');
const { Student_ip, Student_fp } = require('./Student');

const findStudents = [
  () => {
    const curry = new Student_ip('Haskell', 'Curry', '111-11-1111', 'Penn State');
    curry.address = new Address('US');
  
    const turing = new Student_ip('Alan', 'Turing', '222-22-2222', 'Princeton');
    turing.address = new Address('England');
  
    const church = new Student_ip('Alonzo', 'Church', '333-33-3333', 'Princeton');
    church.address = new Address('US');
  
    const kleene = new Student_ip('Stephen', 'Kleene', '444-44-4444', 'Princeton');
    kleene.address = new Address('US');
  
    console.log('findStudentsBy_ip', church.studentsInSameCountryAndSchool([curry, turing, kleene]));
  },
  
  () => {
    const curry = new Student_fp('Haskell', 'Curry', '111-11-1111', 'Penn State');
    curry.address = new Address('US');
  
    const turing = new Student_fp('Alan', 'Turing', '222-22-2222', 'Princeton');
    turing.address = new Address('England');
  
    const church = new Student_fp('Alonzo', 'Church', '333-33-3333', 'Princeton');
    church.address = new Address('US');
  
    const kleene = new Student_fp('Stephen', 'Kleene', '444-44-4444', 'Princeton');
    kleene.address = new Address('US');
  
    const selector = (country, school) => (student) => student.address.country == country && student.school == school;
    const findStudentsBy = (friends, selector) => friends.filter(selector);
    console.log('findStudentsBy_fp', findStudentsBy([curry, turing, kleene], selector(church.address.country, church.school)));
  }
];


module.exports = findStudents;