const fp = require('lodash/fp');
const _ = require('lodash');
const R = require('ramda');

const { MonadWrapper } = require('./MonadWrapper');
const { findFromDB, StudentDB } = require('../ch1/db');
const { lift } = require('./lift');
const { IO } = require('./IO');
const { normalize } = require('../ch4/normalize');
const { trim } = require('../ch4/trim');
const { Maybe } = require('./Maybe');
const { Either } = require('./Either');

const monad = [
  () => {
    const data = MonadWrapper.of('Hello Monads!')
      .map(fp.toUpper)
      .map(fp.identity);
  
    console.log(data.join().get());
  },
  
  () => {
    const findObject = fp.curry((db, id) => MonadWrapper.of(findFromDB(db, id)));
    const getFirstName = (student) => MonadWrapper.of(student.map(fp.prop('firstname')));
    const studentFirstName = fp.compose(
      getFirstName,
      findObject(new StudentDB())
    );
  
    console.log(studentFirstName('444-44-4444').join().get());
  },
  
  () => {
    const safeFindObject = fp.curry((db, id) => Maybe.fromNullable(findFromDB(db, id)));
    const safeFindStudent = safeFindObject(new StudentDB());
    const address = safeFindStudent('444-44-4444').map(fp.prop('address')).getOrElse('주소가 없습니다.');
    const ssn = safeFindStudent('444-44-4444').map(fp.prop('ssn')).getOrElse('SSN이 없습니다.');
  
    console.log(address, ssn);
  },
  
  () => {
    const findObject = fp.curry(findFromDB);
    const safeFindObject = (prop) => fp.compose(lift(fp.prop(prop)), findObject);
    const safeFindAddress = safeFindObject('address');
    const safeFindSsn = safeFindObject('ssn');
  
    const address = safeFindAddress(new StudentDB(), '444-44-4444').getOrElse('주소가 없습니다.');
    const ssn = safeFindSsn(new StudentDB(), '444-44-4444').getOrElse('SSN이 없습니다.');
  
    console.log(address, ssn);
  },
  
  () => {
    const safeFindObject = fp.curry((db, id) => Either.fromNullable(findFromDB(db, id)));
    const safeFindStudent = safeFindObject(new StudentDB());
    safeFindStudent('444-44-4444').map(fp.prop('address')).orElse((val) => console.log('error', val));
    console.log(safeFindStudent('444-44-4444').map(fp.prop('ssn')));
  },
  
  () => {
    const read = fp.curry((db, id) => () => findFromDB(db, id));
    const write = fp.curry((error, message) => console.log(error ? 'error' : 'info', message));
  
    const ioChain = IO.from(read(new StudentDB(), '444-44-4444'))
      .map(fp.prop('firstname'))
      .map(_.startCase)
      .map(write(false));
    ioChain.run();
  },
  
  () => {
    const validLength = (len, str) => str.length == len;
    const checkLengthSsn = (ssn) => validLength(9, ssn) ? Either.right(ssn) : Either.left('잘못된 ssn입니다');
    const safeFindObject = fp.curry((db, id) => {
      const val = findFromDB(db, id);
      return val ? Either.right(val) : Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
    });
    const findStudent = safeFindObject(new StudentDB());
    const cleanInput = fp.compose(normalize, trim);
  
    const showStudent = (ssn) => Either.fromNullable(ssn)
      .map(cleanInput)
      .chain(checkLengthSsn)
      .chain(findStudent);
  
    console.log(showStudent('444-44-4444'));
  },
  
  () => {
    const validLength = (len, str) => str.length == len;
    const checkLengthSsn = (ssn) => validLength(9, ssn) ? Either.right(ssn) : Either.left('잘못된 ssn입니다');
    const safeFindObject = fp.curry((db, id) => {
      const val = findFromDB(db, id);
      return val ? Either.right(val) : Either.left(`ID가 ${id}인 객체를 찾을 수 없습니다.`);
    });
    const findStudent = safeFindObject(new StudentDB());
    const cleanInput = fp.compose(normalize, trim);  
    
    const map = fp.curry((f, container) => container.map(f));
    const chain = fp.curry((f, container) => container.chain(f));
    const getOrElse = fp.curry((message, container) => container.getOrElse(message));
    
    const showStudent = fp.compose(
      getOrElse('찾을 수 없습니다'),
      R.tap(console.log),
      R.map(R.prop('address')),
      R.tap(console.log),
      findStudent,
    );
  
    const result = showStudent('444-44-4444');
    console.log(result);
  }
];


module.exports = monad;