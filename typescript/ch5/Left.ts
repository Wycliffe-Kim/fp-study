import { Either } from './Either';
import { WrapperFunc } from './WrapperFunc';

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

export {
  Left
};