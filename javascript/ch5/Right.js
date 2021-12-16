const { Either } = require('./Either');
const { EitherFactory } = require('./EitherFactory');

class Right extends Either {
  map(f) {
    return EitherFactory.fromNullable(f(this._value));
  }

  getOrElse(other) {
    return this._value;
  }

  orElse() {
    return this;
  }

  chain(f) {
    return f(this._value);
  }

  getOrElseThrow() {
    return this._value;
  }

  filter(f) {
    return EitherFactory.fromNullable(f(this._value) ? this._value : null);
  }

  toString() {
    return `Either.Right(${this._value})`;
  }
}

module.exports = {
  Right
};