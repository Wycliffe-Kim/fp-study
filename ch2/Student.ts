import { Person_fp, Person_oop } from './Person';

class Student_oop extends Person_oop {
  _school: string;

  constructor(firstname: string, lastname: string, ssn: string, school: string) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends: Student_oop[]) {
    const closeFriends = super.peopleInSameCountry(friends);
    const result = [];
    for (let i in closeFriends) {
      const friend = closeFriends[i] as Student_oop;
      if (this.school == friend.school) {
        result.push(friend);
      }
    }

    return result;
  }
}

class Student_fp extends Person_fp {
  _school: string;

  constructor(firstname: string, lastname: string, ssn: string, school: string) {
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
}