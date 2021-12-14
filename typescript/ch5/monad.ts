import { MonadWrapper } from './MonadWrapper';
import fp from 'lodash/fp';
import { findFromDB, StudentDB } from '../ch1/db';
import { MaybeFactory } from './MaybeFactory';
import { lift } from './lift';
import { EitherFactory } from './EitherFactory';
import { IO } from './IO';
import _ from 'lodash';

function monad1() {
  const data = MonadWrapper.of('Hello Monads!')
    .map(fp.toUpper)
    .map(fp.identity);

  console.log(data.join().get());
}

function monad2() {
  const findObject = fp.curry((db: StudentDB, id: string) => MonadWrapper.of(findFromDB(db, id)));
  const getFirstName = (student: MonadWrapper) => MonadWrapper.of(student.map(fp.prop('firstname')));
  const studentFirstName = fp.compose(
    getFirstName,
    findObject(new StudentDB())
  );

  console.log(studentFirstName('444-44-4444').join().get());
}

function monadMaybe() {
  const safeFindObject = fp.curry((db: StudentDB, id: string) => MaybeFactory.fromNullable(findFromDB(db, id)));
  const safeFindStudent = safeFindObject(new StudentDB());
  const address = safeFindStudent('444-44-4444').map(fp.prop('address')).getOrElse('주소가 없습니다.');
  const ssn = safeFindStudent('444-44-4444').map(fp.prop('ssn')).getOrElse('SSN이 없습니다.');

  console.log(address, ssn);
}

function monadLift() {
  const findObject = fp.curry(findFromDB);
  const safeFindObject = (prop: string) => fp.compose(lift(fp.prop(prop)), findObject);
  const safeFindAddress = safeFindObject('address');
  const safeFindSsn = safeFindObject('ssn');

  const address = safeFindAddress(new StudentDB(), '444-44-4444').getOrElse('주소가 없습니다.');
  const ssn = safeFindSsn(new StudentDB(), '444-44-4444').getOrElse('SSN이 없습니다.');

  console.log(address, ssn);
}

function monadEither() {
  const safeFindObject = fp.curry((db: StudentDB, id: string) => EitherFactory.fromNullable(findFromDB(db, id)));
  const safeFindStudent = safeFindObject(new StudentDB());
  safeFindStudent('444-44-4444').map(fp.prop('address')).orElse((val) => console.log('error', val));
  console.log(safeFindStudent('444-44-4444').map(fp.prop('ssn')));
}

function monadIO() {
  const read = fp.curry((db: StudentDB, id: string) => () => findFromDB(db, id));
  const write = fp.curry((error: boolean, message: string) => console.log(error ? 'error' : 'info', message));

  const ioChain = IO.from(read(new StudentDB(), '444-44-4444'))
    .map(fp.prop('firstname'))
    .map(_.startCase)
    .map(write(false));
  ioChain.run();
}

export {
  monad1,
  monad2,
  monadMaybe,
  monadLift,
  monadEither,
  monadIO
};