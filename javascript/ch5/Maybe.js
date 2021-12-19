class Maybe {
  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }

  static just(value) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }

  static fromNullable(value) {
    return value != null ? Maybe.just(value) : Maybe.nothing();
  }

  static of(value) {
    return Maybe.just(value);
  }
}

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

class Just extends Maybe {
  constructor(value) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  map(f) {
    return Maybe.fromNullable(f(this._value));
  }

  getOrElse(other) {
    return this._value;
  }

  filter(f) {
    Maybe.fromNullable(f(this._value) ? this._value : null);
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
  Maybe,
  Nothing,
  Just
};