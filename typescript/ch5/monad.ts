import { MonadWrapper } from './MonadWrapper';
import fp from 'lodash/fp';
import { findFromDB, StudentDB } from '../ch1/db';
import { lift } from './lift';
import { IO } from './IO';
import _ from 'lodash';
import { normalize } from '../ch4/normalize';
import { trim } from '../ch4/trim';
import { WrapperFunc } from './WrapperFunc';
import { Maybe, Just, Nothing } from './Maybe';
import { Either, Right, Left } from './Either';
import R from 'ramda';

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
  const ssn = safeFindSsn(new StudentDB(), '444-44-4444').getOrElse('SSN이 없습니다.');

  console.log(address, ssn);
}

function monadEither() {
  const safeFindObject = fp.curry((db: StudentDB, id: string) => Either.fromNullable(findFromDB(db, id)));
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

function monadChain() {
  const validLength = (len: number, str: string) => str.length == len;
  const checkLengthSsn = (ssn: string) => validLength(9, ssn) ? Either.right(ssn) : Either.left('잘못된 ssn입니다');
  const safeFindObject = fp.curry((db: StudentDB, id: string) => {
    const val = findFromDB(db, id);
    return val ? Either.right(val) : Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
  });
  const findStudent = safeFindObject(new StudentDB());
  const cleanInput = fp.compose(normalize, trim);

  const showStudent = (ssn: string) => Either.fromNullable(ssn)
    .map(cleanInput)
    .chain(checkLengthSsn)
    .chain(findStudent);

  console.log(showStudent('444-44-4444'));
}

function monacCompose() {
  const validLength = (len: number, str: string) => str.length == len;
  const checkLengthSsn = (ssn: string) => validLength(9, ssn) ? Either.right(ssn) : Either.left('잘못된 ssn입니다');
  const safeFindObject = fp.curry((db: StudentDB, id: string) => {
    const val = findFromDB(db, id);
    return val ? Either.right(val) : Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
  });
  const findStudent = safeFindObject(new StudentDB());
  const cleanInput = fp.compose(normalize, trim);  
  
  const map = fp.curry((f: WrapperFunc, container: Just | Nothing | Right | Left) => container.map(f));
  const chain = fp.curry((f: WrapperFunc, container: Just | Nothing | Right | Left) => container.chain(f));
  const getOrElse = fp.curry((message: string, container: Just | Nothing | Right | Left) => container.getOrElse(message));

  const showStudent = fp.compose(
    getOrElse('찾을 수 없습니다'),
    R.tap(console.log),
    R.map(fp.prop('address')),
    R.tap(console.log),
    findStudent,
  );

  const result = showStudent('444-44-4444');
  console.log(result);
}

export {
  monad1,
  monad2,
  monadMaybe,
  monadLift,
  monadEither,
  monadIO,
  monadChain,
  monacCompose
};