import { Just } from './Just';
import { Nothing } from './Nothing';

class MaybeFactory {
  static just(value: any) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }

  static fromNullable(value: any) {
    return value != null ? MaybeFactory.just(value) : MaybeFactory.nothing();
  }

  static of(value: any) {
    return MaybeFactory.just(value);
  }
}

export {
  MaybeFactory
};