import { Maybe } from './Maybe';
import { MaybeFactory } from './MaybeFactory';
import { WrapperFunc } from './WrapperFunc';

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
    return MaybeFactory.fromNullable(f(this._value));
  }

  getOrElse(other?: any) {
    return this._value;
  }

  filter(f: WrapperFunc) {
    MaybeFactory.fromNullable(f(this._value) ? this._value : null);
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
  Just
};