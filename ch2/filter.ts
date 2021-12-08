import _ from 'lodash';
import { Address } from './Address';
import { Person_fp, Person_oop } from './Person';

function filter_oop() {
  const p1 = new Person_oop('Haskel', 'Curry', '111-11-1111');
  p1.address = new Address('US');
  p1.birthYear = 1900;

  const p2 = new Person_oop('Barkley', 'Rosser', '222-22-2222');
  p2.address = new Address('Greece');
  p2.birthYear = 1907;

  const p3 = new Person_oop('John', 'von Neumann', '333-33-3333');
  p3.address = new Address('Hungary');
  p3.birthYear = 1903;

  const p4 = new Person_oop('Alonzo', 'Church', '444-44-4444');
  p4.address = new Address('US');
  p4.birthYear = 1903;

  let result = '';
  const persons = [p1, p2, p3, p4];
  let first = true;

  for (let i = 0; i < persons.length; i++) {
    if (persons[i].birthYear != 1903) {
      continue;
    }

    if (first == true) {
      first = false;
    } else {
      result += ' and ';
    }

    result += persons[i].fullname;
  }

  console.log('filter_oop', result);
}

function filter_fp() {
  const p1 = new Person_fp('Haskel', 'Curry', '111-11-1111');
  p1.address = new Address('US');
  p1.birthYear = 1900;

  const p2 = new Person_fp('Barkley', 'Rosser', '222-22-2222');
  p2.address = new Address('Greece');
  p2.birthYear = 1907;

  const p3 = new Person_fp('John', 'von Neumann', '333-33-3333');
  p3.address = new Address('Hungary');
  p3.birthYear = 1903;

  const p4 = new Person_fp('Alonzo', 'Church', '444-44-4444');
  p4.address = new Address('US');
  p4.birthYear = 1903;

  const fullname = (person: Person_fp) => `${person.firstname} ${person.lastname}`;

  const persons = [p1, p2, p3, p4];
  const result = _(persons)
    .filter((person: Person_fp) => person.birthYear == 1903)
    .map(fullname)
    .join(' and ');

  console.log('filter_fp', result);
}

export {
  filter_oop,
  filter_fp
};