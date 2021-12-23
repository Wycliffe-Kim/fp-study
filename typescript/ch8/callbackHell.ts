import R from 'ramda';
import { IO } from '../ch5/IO';
import average from './average';
import { getJSONCallback } from './getJSON';

function callbackHell() {
  const log = R.curry((title: string, message: any) => console.log(title, message));

  getJSONCallback('http://localhost:5555/students', (data) => {
    const grades = R.map((student: any) => student.grade)(data);
    const grade = average(grades);
    const io = (grade: number) => IO.of(grade).map(log('callbackHell success')).run();
    io(grade);
  }, (err) => {
    log('callbackHell fail', err);
  });
}

export {
  callbackHell
};