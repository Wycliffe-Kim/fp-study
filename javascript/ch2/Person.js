const { Address } = require('./Address');

class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._ssn = ssn;
    this._address = new Address('');
    this._birthYear = 0;
  }

  get firstname() {
    return this._firstname;
  }

  set firstname(firstname) {
    this._firstname = firstname;
  }

  get lastname() {
    return this._lastname;
  }

  set lastname(lastname) {
    this._lastname = lastname;
  }

  get ssn() {
    return this._ssn;
  }

  set ssn(ssn) {
    this._ssn = ssn;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    this._address = address;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(birthYear) {
    this._birthYear = birthYear;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Person_ip extends Person {
  peopleInSameCountry(friends) {
    const result = [];
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

module.exports = {
  Person_ip,
  Person_fp
};