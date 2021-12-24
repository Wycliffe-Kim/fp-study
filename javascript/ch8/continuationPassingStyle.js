const R = require('ramda');
const { IO } = require('../ch5/IO');
const average = require('./average');
const { getJSONCallback } = require('./getJSON');

// CPS(Continuation Passing Style)은 이와 같이 콜백 지옥과 비교해 보았을 때,
// 함수를 별개의 컴포넌트로 빼는 차이밖에 없지만 스택 효율이 더 좋다.
function continuationPassingStyle() {
  const log = R.curry((title, message) => console.log(title, message));

  const success = (data) => {
    const grades = R.map((student) => student.grade)(data);
    const grade = average(grades);
    const io = (grade) => IO.of(grade).map(log('continuationPassingStyle success')).run();
    io(grade);
  }

  const fail = (err) => {
    log('callbackHell fail', err);
  }

  getJSONCallback('http://localhost:5555/students', success, fail);
}

module.exports = continuationPassingStyle;