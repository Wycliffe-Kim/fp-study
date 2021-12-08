import { Address } from './Address';

class Person {
  _firstname: string;

  _lastname: string;

  _ssn: string;

  _address: Address;

  _birthYear: number;

  constructor(firstname: string, lastname: string, ssn: string) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = new Address('');
    this._birthYear = 0;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname: string) {
    this._firstname = firstname;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(lastname: string) {
    this._lastname = lastname;
  }

  get ssn() {
    return this._ssn;
  }

  set ssn(ssn: string) {
    this._ssn = ssn;
  }

  get address() {
    return this._address;
  }

  set address(address: Address) {
    this._address = address;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(birthYear: number) {
    this._birthYear = birthYear;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Person_oop extends Person {
  peopleInSameCountry(friends: Person[]) {
    const result: Person[] = [];
    for (const i in friends) {
      const friend = friends[i];
      if (this.address.country == friend.address.country) {
        result.push(friend);
      }
    }

    return result;
  }
}

class Person_fp extends Person {}

export {
  Person_oop,
  Person_fp
};