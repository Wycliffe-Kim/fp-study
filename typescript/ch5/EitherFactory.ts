import { Right } from './Right';
import { Left } from './Left';

class EitherFactory {
  static left(value: any) {
    return new Left(value);
  }

  static right(value: any) {
    return new Right(value);
  }

  static fromNullable(value: any): Right | Left {
    return value != null ? EitherFactory.right(value) : EitherFactory.left(value);
  }

  static of(value: any) {
    return EitherFactory.right(value);
  }
}

export {
  EitherFactory
};