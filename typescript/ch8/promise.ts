import R from 'ramda';
import { IO } from '../ch5/IO';
import average from './average';
import { getJSONPromise } from './getJSON';

function promise() {
  const log = R.curry((title: string, message: any) => console.log(title, message));

  getJSONPromise('http://localhost:5555/students')
  .then(R.map((student: any) => student.grade))
  .then(average)
  .then((grade) => IO.of(grade).map(log('promise success')).run())
  .catch((error) => log('promise fail', error));
}

export default promise;