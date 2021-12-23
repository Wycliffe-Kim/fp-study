import R from 'ramda';
import { IO } from '../ch5/IO';
import average from './average';
import { getJSONPromise } from './getJSON';

function promise() {
  getJSONPromise('http://localhost:5555/students')
  .then(R.map((student: any) => student.grade))
  .then(average)
  .then((grade) => IO.of(grade).map(console.log).run())
  .catch((error) => console.log('promise fail', error));
}

export {
  promise
};