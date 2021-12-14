const { Right } = require('./Right');
const { Left } = require('./Left');

class EitherFactory {
  static left(value) {
    return new Left(value);
  }

  static right(value) {
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