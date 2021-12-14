import { Either } from './Either';
import { EitherFactory } from './EitherFactory';
import { WrapperFunc } from './WrapperFunc';

class Right extends Either {
  map(f: WrapperFunc) {
    return EitherFactory.fromNullable(f(this._value));
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
    return EitherFactory.fromNullable(f(this._value) ? this._value : null);
  }

  toString() {
    return `Either.Right(${this._value})`;
  }
}

export {
  Right
};