class EitherFactory {
  static left(value) {
    const { Left } = require('./Left');
    return new Left(value);
  }

  static right(value) {
    const { Right } = require('./Right');
    return new Right(value);
  }

  static fromNullable(value) {
    return value != null ? EitherFactory.right(value) : EitherFactory.left(value);
  }

  static of(value) {
    return EitherFactory.right(value);
  }
}

module.exports = {
  EitherFactory
};