import _ from 'lodash';
import { WrapperFunc } from './WrapperFunc';

type IOFunc = () => any;

class IO {
  protected _effect: IOFunc;

  constructor(effect: IOFunc) {
    if (!_.isFunction(effect)) {
      throw 'IO 사용법: 함수는 필수입니다!';
    }
    this._effect = effect;
  }

  static of(value: any) {
    return new IO(() => value);
  }

  static from(f: IOFunc) {
    return new IO(f);
  }

  map(f: WrapperFunc) {
    return new IO(() => f(this._effect()));
  }

  chain(f: WrapperFunc) {
    return f(this._effect());
  }

  run() {
    return this._effect();
  }
}

export {
  IO
};