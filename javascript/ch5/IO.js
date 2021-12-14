const _ = require('lodash');

class IO {
  constructor(effect) {
    if (!_.isFunction(effect)) {
      throw 'IO 사용법: 함수는 필수입니다!';
    }
    this._effect = effect;
  }

  static of(value) {
    return new IO(() => value);
  }

  static from(f) {
    return new IO(f);
  }

  map(f) {
    return new IO(() => f(this._effect()));
  }

  chain(f) {
    return f(this._effect());
  }

  run() {
    return this._effect();
  }
}

module.exports = {
  IO
};