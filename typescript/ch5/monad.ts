import { MonadWrapper } from './MonadWrapper';
import fp from 'lodash/fp';
import { findFromDB, StudentDB } from '../ch1/db';
import { Student_fp } from '../ch2/Student';

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

export {
  monad1,
  monad2
};