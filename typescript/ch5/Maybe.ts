import { WrapperFunc } from './WrapperFunc';

class Maybe {
  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }

  static just(value: any) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }

  static fromNullable(value: any) {
    return value != null ? Maybe.just(value) : Maybe.nothing();
  }

  static of(value: any) {
    return Maybe.just(value);
  }
}

class Nothing extends Maybe {
  protected _value: any;

  map(f: WrapperFunc) {
    return this;
  }

  get value() {
    throw new TypeError('Nothing 값을 가져올 수 없습니다.');
  }

  getOrElse(other?: any) {
    return other;
  }

  filter(f: WrapperFunc) {
    return this._value;
  }

  chain(f: WrapperFunc) {
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
  protected _value: any;

  constructor(value: any) {
    super();
    this._value = value;
  }

  get value() {
    return this._value;
  }

  map(f: WrapperFunc) {
    return Maybe.fromNullable(f(this._value));
  }

  getOrElse(other?: any) {
    return this._value;
  }

  filter(f: WrapperFunc) {
    Maybe.fromNullable(f(this._value) ? this._value : null);
  }

  chain(f: WrapperFunc) {
    return f(this._value);
  }

  toString() {
    return `Maybe.Just(${this._value})`;
  }

  get isJust() {
    return true;
  }
}

export {
  Maybe,
  Nothing,
  Just
};