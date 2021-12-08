import _ from 'lodash';
import { Address } from '../ch2/Address';
import { Person_fp, Person_oop } from '../ch2/Person';

function map_oop() {
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

  const result = [];
  const persons = [p1, p2, p3, p4];

  for (let i = 0; i < persons.length; i++) {
    const p = persons[i];
    if (p != null) {
      result.push(p.fullname);
    }
  }

  console.log('map_oop', result);
}

function map_fp() {
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
  const result = _(persons).map((person) => person != null ? fullname(person) : '').value();
  console.log('map_fp', result);
}

export {
  map_oop,
  map_fp
};