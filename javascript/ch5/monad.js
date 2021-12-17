const { MonadWrapper } = require('./MonadWrapper');
const fp = require('lodash/fp');
const { findFromDB, StudentDB } = require('../ch1/db');
const { MaybeFactory } = require('./MaybeFactory');
const { lift } = require('./lift');
const { EitherFactory } = require('./EitherFactory');
const { IO } = require('./IO');
const _ = require('lodash');
const { normalize } = require('../ch4/normalize');
const { trim } = require('../ch4/trim');

function monad1() {
  const data = MonadWrapper.of('Hello Monads!')
    .map(fp.toUpper)
    .map(fp.identity);

  console.log(data.join().get());

  
}

function monad2() {
  const findObject = fp.curry((db, id) => MonadWrapper.of(findFromDB(db, id)));
  const getFirstName = (student) => MonadWrapper.of(student.map(fp.prop('firstname')));
  const studentFirstName = fp.compose(
    getFirstName,
    findObject(new StudentDB())
  );

  console.log(studentFirstName('444-44-4444').join().get());
}

function monadMaybe() {
  const safeFindObject = fp.curry((db, id) => MaybeFactory.fromNullable(findFromDB(db, id)));
  const safeFindStudent = safeFindObject(new StudentDB());
  const address = safeFindStudent('444-44-4444').map(fp.prop('address')).getOrElse('주소가 없습니다.');
  const ssn = safeFindStudent('444-44-4444').map(fp.prop('ssn')).getOrElse('SSN이 없습니다.');

  console.log(address, ssn);
}

function monadLift() {
  const findObject = fp.curry(findFromDB);
  const safeFindObject = (prop) => fp.compose(lift(fp.prop(prop)), findObject);
  const safeFindAddress = safeFindObject('address');
  const safeFindSsn = safeFindObject('ssn');

  const address = safeFindAddress(new StudentDB(), '444-44-4444').getOrElse('주소가 없습니다.');
  const ssn = safeFindSsn(new StudentDB(), '444-44-4444').getOrElse('SSN이 없습니다.');

  console.log(address, ssn);
}

function monadEither() {
  const safeFindObject = fp.curry((db, id) => EitherFactory.fromNullable(findFromDB(db, id)));
  const safeFindStudent = safeFindObject(new StudentDB());
  safeFindStudent('444-44-4444').map(fp.prop('address')).orElse((val) => console.log('error', val));
  console.log(safeFindStudent('444-44-4444').map(fp.prop('ssn')));
}

function monadIO() {
  const read = fp.curry((db, id) => () => findFromDB(db, id));
  const write = fp.curry((error, message) => console.log(error ? 'error' : 'info', message));

  const ioChain = IO.from(read(new StudentDB(), '444-44-4444'))
    .map(fp.prop('firstname'))
    .map(_.startCase)
    .map(write(false));
  ioChain.run();
}

function monadChain() {
  const validLength = (len, str) => str.length == len;
  const checkLengthSsn = (ssn) => validLength(9, ssn) ? EitherFactory.right(ssn) : EitherFactory.left('잘못된 ssn입니다');
  const safeFindObject = fp.curry((db, id) => {
    const val = findFromDB(db, id);
    return val ? EitherFactory.right(val) : EitherFactory.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
  });
  const findStudent = safeFindObject(new StudentDB());
  const cleanInput = fp.compose(normalize, trim);

  const showStudent = (ssn) => EitherFactory.fromNullable(ssn)
    .map(cleanInput)
    .chain(checkLengthSsn)
    .chain(findStudent);

  console.log(showStudent('444-44-4444'));
}

function monadCompose() {
  const validLength = (len, str) => str.length == len;
  const checkLengthSsn = (ssn) => validLength(9, ssn) ? EitherFactory.right(ssn) : EitherFactory.left('잘못된 ssn입니다');
  const safeFindObject = fp.curry((db, id) => {
    const val = findFromDB(db, id);
    return val ? EitherFactory.right(val) : EitherFactory.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
  });
  const findStudent = safeFindObject(new StudentDB());
  const cleanInput = fp.compose(normalize, trim);  
  
  const map = fp.curry((f, container) => container.map(f));
  const chain = fp.curry((f, container) => container.chain(f));
  const getOrElse = fp.curry((message, container) => container.getOrElse(message));
  
  const showStudent = fp.compose(
    getOrElse('찾을 수 없습니다'),
    fp.tap(console.log),
    map(fp.prop('address')),
    fp.tap(console.log),
    findStudent,
  );

  const result = showStudent('444-44-4444');
  console.log(result);
}

module.exports = {
  monad1,
  monad2,
  monadMaybe,
  monadLift,
  monadEither,
  monadIO,
  monadChain,
  monadCompose
};