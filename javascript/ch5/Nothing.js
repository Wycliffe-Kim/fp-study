const { Maybe } = require('./Maybe');

class Nothing extends Maybe {
  map(f) {
    return this;
  }

  get value() {
    throw new TypeError('Nothing 값을 가져올 수 없습니다.');
  }

  getOrElse(other) {
    return other;
  }

  filter(f) {
    return this._value;
  }

  chain(f) {
    return this;
  }

  toString() {
    return 'Maybe.Nothing';
  }

  get isNothing() {
    return true;
  }
}

module.exports = {
  Nothing
};