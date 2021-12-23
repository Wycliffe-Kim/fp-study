import axios from 'axios';
import getJSON from './getJSON';

// CPS(Continuation Passing Style)은 이와 같이 콜백 지옥과 비교해 보았을 때,
// 함수를 별개의 컴포넌트로 빼는 차이밖에 없지만 스택 효율이 더 좋다.
function continuationPassingStyle() {
  const success = (data: any) => {
    console.log('continuationPassingStyle', 'success');
    console.log(data);
  }

  const fail = (error: Error) => {
    console.log('continuationPassingStyle', 'fail');
    console.log(error);
  }

  getJSON('http://localhost:5555/students', success, fail);
}

export {
  continuationPassingStyle
};