import { Person_fp, Person_oop } from './Person';

class Student_oop extends Person_oop {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends) {
    const closeFriends = super.peopleInSameCountry(friends);
    const result = [];
    for (const i in closeFriends) {
      const friend = closeFriends[i];
      if (this.school == friend.school) {
        result.push(friend);
      }
    }

    return result;
  }
}

class Student_fp extends Person_fp {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }
}

export {
  Student_oop,
  Student_fp
};