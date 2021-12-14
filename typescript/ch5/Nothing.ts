// import { Maybe } from './Maybe';
import { WrapperFunc } from './WrapperFunc';

class Nothing /* extends Maybe */ {
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

export {
  Nothing
};