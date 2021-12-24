import R from 'ramda';
import { IO } from '../ch5/IO';
import average from './average';
import { getJSONCallback } from './getJSON';

// CPS(Continuation Passing Style)은 이와 같이 콜백 지옥과 비교해 보았을 때,
// 함수를 별개의 컴포넌트로 빼는 차이밖에 없지만 스택 효율이 더 좋다.
function continuationPassingStyle() {
  const log = R.curry((title: string, message: any) => console.log(title, message));

  const success = (data: any) => {
    const grades = R.map((student: any) => student.grade)(data);
    const grade = average(grades);
    const io = (grade: number) => IO.of(grade).map(log('continuationPassingStyle success')).run();
    io(grade);
  }

  const fail = (err: Error) => {
    log('callbackHell fail', err);
  }

  getJSONCallback('http://localhost:5555/students', success, fail);
}

export default continuationPassingStyle;