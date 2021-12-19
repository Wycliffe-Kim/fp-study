import { WrapperFunc } from './WrapperFunc';

class Either {
  protected _value: any;

  constructor(value: any) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  static left(value: any) {
    return new Left(value);
  }

  static right(value: any) {
    return new Right(value);
  }

  static fromNullable(value: any): Right | Left {
    return value != null ? Either.right(value) : Either.left(value);
  }

  static of(value: any) {
    return Either.right(value);
  }
}

class Left extends Either {
  get value() {
    throw TypeError(`Left(${this._value}) 값을 가져올 수 없습니다.`);
  }

  map(f: WrapperFunc) {
    return this;
  }

  getOrElse(other?: any) {
    return other;
  }

  orElse(f: WrapperFunc) {
    return f(this._value);
  }

  chain(f: WrapperFunc) {
    return this;
  }

  getOrElseThrow(value: any) {
    throw new Error(value);
  }

  filter(f: WrapperFunc) {
    return this;
  }

  toString() {
    return `Either.Left(${this._value})`;
  }
}
class Right extends Either {
  map(f: WrapperFunc) {
    return Either.fromNullable(f(this._value));
  }

  getOrElse(other?: any) {
    return this._value;
  }

  orElse() {
    return this;
  }

  chain(f: WrapperFunc) {
    return f(this._value);
  }

  getOrElseThrow() {
    return this._value;
  }

  filter(f: WrapperFunc) {
    return Either.fromNullable(f(this._value) ? this._value : null);
  }

  toString() {
    return `Either.Right(${this._value})`;
  }
}

export {
  Either,
  Left,
  Right
};