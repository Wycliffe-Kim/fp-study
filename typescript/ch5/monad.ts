import { MonadWrapper } from './MonadWrapper';
import fp from 'lodash/fp';
import { findFromDB, StudentDB } from '../ch1/db';
import { Maybe } from './Maybe';
import { lift } from './lift';

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
  const safeFindObject = fp.curry((db: StudentDB, id: string) => Maybe.fromNullable(findFromDB(db, id)));
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
  const ssn = safeFindSsn(new StudentDB(), '444-44-4444').getOrElse('SSN이 없습니다.')
 
  console.log(address, ssn);
}

export {
  monad1,
  monad2,
  monadMaybe,
  monadLift
};