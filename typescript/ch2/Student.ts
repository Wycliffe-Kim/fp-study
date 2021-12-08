import { Person_fp, Person_ip } from './Person';

class Student_ip extends Person_ip {
  _school: string;

  constructor(firstname: string, lastname: string, ssn: string, school: string) {
    super(firstname, lastname, ssn);
    this._school = school;
  }

  get school() {
    return this._school;
  }

  studentsInSameCountryAndSchool(friends: Student_ip[]) {
    const closeFriends = super.peopleInSameCountry(friends);
    const result = [];
    for (const i in closeFriends) {
      const friend = closeFriends[i] as Student_ip;
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
  Student_ip,
  Student_fp
};