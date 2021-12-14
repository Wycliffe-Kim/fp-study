const { Just } = require('./Just');
const { Nothing } = require('./Nothing');

class MaybeFactory {
  static just(value) {
    return new Just(value);
  }

  static nothing() {
    return new Nothing();
  }

  static fromNullable(value) {
    return value != null ? MaybeFactory.just(value) : MaybeFactory.nothing();
  }

  static of(value) {
    return MaybeFactory.just(value);
  }
}

module.exports = {
  MaybeFactory, 
};