import { WrapperFunc } from './WrapperFunc';

class MonadWrapper {
  protected _value: any;

  static of(value: any) {
    return new MonadWrapper(value);
  }

  constructor(value: any) {
    this._value = value;
  }

  map(f: WrapperFunc) {
    return MonadWrapper.of(f(this._value));
  }

  join(): MonadWrapper {
    if (!(this._value instanceof MonadWrapper)) {
      return this;
    }

    return this._value.join();
  }

  get() {
    return this._value;
  }

  toString() {
    return `Wrapper(${this._value})`;
  }
}

export {
  MonadWrapper
};