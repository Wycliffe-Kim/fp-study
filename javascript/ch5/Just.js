const { Maybe } = require('./Maybe');
const { MaybeFactory } = require('./MaybeFactory');

class Just extends Maybe {
  constructor(value) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  map(f) {
    return MaybeFactory.fromNullable(f(this._value));
  }

  getOrElse(other) {
    return this._value;
  }

  filter(f) {
    MaybeFactory.fromNullable(f(this._value) ? this._value : null);
  }

  chain(f) {
    return f(this._value);
  }

  toString() {
    return `Maybe.Just(${this._value})`;
  }

  get isJust() {
    return true;
  }
}

module.exports = {
  Just
};