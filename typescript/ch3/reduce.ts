import _ from 'lodash';
import { Address } from '../ch2/Address';
import { Person_fp, Person_ip } from '../ch2/Person';

function reduce_ip() {
  const p1 = new Person_ip('Haskel', 'Curry', '111-11-1111');
  p1.address = new Address('US');
  p1.birthYear = 1900;

  const p2 = new Person_ip('Barkley', 'Rosser', '222-22-2222');
  p2.address = new Address('Greece');
  p2.birthYear = 1907;

  const p3 = new Person_ip('John', 'von Neumann', '333-33-3333');
  p3.address = new Address('Hungary');
  p3.birthYear = 1903;

  const p4 = new Person_ip('Alonzo', 'Church', '444-44-4444');
  p4.address = new Address('US');
  p4.birthYear = 1903;

  const result: any = {};
  const persons = [p1, p2, p3, p4];
  for (let i = 0; i < persons.length; i++) {
    const country = persons[i].address.country;
    result[country] = result[country] == null ? 1 : result[country] + 1;
  }

  console.log('reduce_ip', result);
}

function reduce_fp() {
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

  const persons = [p1, p2, p3, p4];
  const result = _(persons).reduce((stat: any, person: Person_fp) => {
    const country = person.address.country;
    stat[country] = _.isUndefined(stat[country]) ? 1 : stat[country] + 1;
    return stat;
  }, {});

  console.log('reduct_fp', result);
}

export {
  reduce_ip,
  reduce_fp
};