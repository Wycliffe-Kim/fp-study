class MaybeFactory {
  static just(value) {
    const { Just } = require('./Just');
    return new Just(value);
  }

  static nothing() {
    const { Nothing } = require('./Nothing');
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
  MaybeFactory
};