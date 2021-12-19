class Either {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static left(value) {
    return new Left(value);
  }

  static right(value) {
    return new Right(value);
  }

  static fromNullable(value) {
    return value != null ? Either.right(value) : Either.left(value);
  }

  static of(value) {
    return Either.right(value);
  }
}

class Left extends Either {
  get value() {
    throw TypeError(`Left(${this._value}) 값을 가져올 수 없습니다.`);
  }

  map(f) {
    return this;
  }

  getOrElse(other) {
    return other
  }

  orElse(f) {
    return f(this._value);
  }

  chain(f) {
    return this;
  }

  getOrElseThrow(value) {
    return new Error(value);
  }

  filter(f) {
    return this;
  }

  toString() {
    return `Either.Left(${this._value})`;
  }
}

class Right extends Either {
  map(f) {
    return Either.fromNullable(f(this._value));
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
    return Either.fromNullable(f(this._value) ? this._value : null);
  }

  toString() {
    return `Either.Right(${this._value})`;
  }
}

module.exports = {
  Either,
  Left,
  Right
};