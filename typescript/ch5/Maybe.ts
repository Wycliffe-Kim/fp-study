import { Just } from './Just';
import { Nothing } from './Nothing';

class Maybe {
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

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }
}

export {
  Maybe
};