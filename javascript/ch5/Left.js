const { Either } = require('./Either');

class Left extends Either {
  get value() {
    throw TypeError(`Left(${this._value}) 값을 가져올 수 없습니다.`);
  }

  map(f) {
    return this;
  }

  getOrElse(other) {
    return other;
  }

  orElse(f) {
    return f(this._value);
  }

  chain(f) {
    return this;
  }

  getOrElseThrow(value) {
    throw new Error(value);
  }

  filter(f) {
    return this;
  }

  toString() {
    return `Either.Left(${this._value})`;
  }
}

module.exports = {
  Left
};