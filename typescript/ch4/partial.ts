import _ from 'lodash';

// partial(부분적용)와 curry(커링)의 가장 큰 차이는 반환하는 값의 차이이다.
// 다음의 예제(각각의 내부를 다음과 같이 표현할 수 있다)를 보면 알 수 있다.
/*
const curriedFunction = (a) => {
  return (b) => {
    return (c) => {
      return a + ', ' + b + ", " + c;
    }
  }
}

const partialFunction = (a) => {
  return (b, c) => {
    return a + ', ' + b + ", " + c;
  }
}
*/

function partial() {
  // 타입스크립트에서는 프로토타입 확장이 깔끔하지 못하다..ㅜ
  (String.prototype as any).first = _.partial(String.prototype.substring, 0);
  console.log(('Functional Programming' as any).first(3));
}

export default partial;