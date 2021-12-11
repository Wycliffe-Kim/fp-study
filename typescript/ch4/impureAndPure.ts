import { StudentDB } from '../ch1/db';
import fp from 'lodash/fp';
import { normalize } from './normalize';
import { trim } from './trim';

function impureAndPure() {
  // 다음은 불순한 함수다. 이유는 외부 데이터인 db에서 데이터를 읽어오기 때문이다.
  // 함수형 프로그래밍에서 함수는 기본적으로 순수 함수를 목적으로 하지만, 코드를 작성하다 보면 다음과 같이 불순한 코드는 필연적이다.
  // 그런 측면에서 불순한 코드와 순수한 코드를 분리시킬 필요가 있다.
  const find = (db: StudentDB, id: string) => db.students.filter((student) => student.ssn === id)[0];
  const findObject = fp.curry((db: StudentDB, id: string) => {
    const obj = find(db, id);
    if (obj == null) {
      throw new Error(`ID가 [${id}]인 객체는 없습니다.`);
    }

    return obj;
  });

  const db = new StudentDB();
  const findStudent = findObject(db);
  const fullInfo = (student: { firstname: string, lastname: string, ssn: string }) => 
                      `${student.ssn}, ${student.firstname}, ${student.lastname}`;
  const append = fp.curry((error: boolean, info: string) => console.log(error ? 'error' : 'info', info));

  const showStudent = fp.compose(
    append(false),
    fullInfo,
    findStudent
  );

  showStudent('444-44-4444');
}

export {
  impureAndPure
}