const _ = require('lodash');

function partial() {
  // 타입스크립트에서는 프로토타입 확장이 깔끔하지 못하다..ㅜ
  String.prototype.first = _.partial(String.prototype.substring, 0);
  console.log('Funtional Programming'.first(3));
}

module.exports = {
  partial
};