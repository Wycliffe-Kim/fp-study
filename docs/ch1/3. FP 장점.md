# 함수형 프로그래밍 장점
- 간단한 함수들로 작업을 분해한다.
- 흐름 체인으로 데이터를 처리한다.
- 리액티브 패러다임을 실현하여 이벤트 중심 코드의 복잠성을 줄인다.

## 복잡한 작업을 분해하도록 유도
FP는 최대한 작은 작업 단위로(함수 단위) 분해하는 것부터 시작한다. FP에서의 모듈화는 단일성의 원리와 밀접한 관련이 있다. 곧 함수는 저마다 한 가지 목표만 바라봐야 한다는 것이다.

FP는 순수 함수, 참조 투명성, 함수 합성의 원리로 인해 복잡한 작업을 분해하도록 자연스럽게 유도한다.

앞서 봤던 `showStudent`(`show_student`) 함수가 이러한 분해와 합성의 적절한 예다.

``` javascript
// javascript
const R = require('ramda');

const find = R.curry((db, id) => {
  let obj = db.find(id);
  if (obj == null) {
    throw new Error('객체를 찾을 수 없습니다');
  }
  return obj;
});

const fullname = (student) => `${student.ssn}, ${student.firstname}, ${student.lastname}`;

const showStudent = R.compose(
  console.log,
  fullname,
  find
);

showStudent('444-44-4444');
```

``` python
# python
import pydash
import toolz as tz

def find_curry(db, id):
    obj = db.find(id)
    if obj == None:
        raise ValueError('객체를 찾을 수 없습니다.')
    return obj

find = pydash.curry(find_curry)

fullname = lambda student: f'{student["ssn"]}, {student["firstname"]}, {student["lastname"]}'

show_student = tz.compose(
    print,
    fullname,
    find
)

show_student('444-44-4444')
```

위의 코드를 보면 `showStudent`(`show_student`)를 잘게 분해한 후 합성하고 있다. 이러한 방식이 자연스럽게 모듈화를 작은 단위로 하도록 유도한다.

## 데이터를 매끄럽게 체이닝하여 처리
FP는 함수를 체이닝(연달아 호출)하여 호출할 수 있도록 한다. 이는 단순히 함수를 엮어서 처리할 수 있도록 하는 장점을 넘어서 평가를 늦춰 한 번에 실행할 수 있도록 한다는 데에 장점을 둔다.

IP와 FP의 차이를 한 번 음미해보자.

``` javascript
// javascript
const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 }
];

// IP
let totalGrades = 0;
let totalStudentsFound = 0;
for (let i = 0; i < enrollment.length; i++) {
  const student = enrollment[i];
  if (student != null && student.enrolled > 1) {
    totalGrades += student.grade;
    totalStudentsFound++;
  }
}
const average = totalGrades / totalStudentsFound;

// FP
const arr = _.chain(enrollment)
      .filter((student) => student.enrolled > 1)
      .map((student) => student.grade)
      .value();
average(arr) // 특징에 있던 예제 참고
```

``` python
import pydash

# python
enrollment = [
    { 'enrolled': 2, 'grade': 100 },
    { 'enrolled': 2, 'grade': 80 },
    { 'enrolled': 1, 'grade': 89 }
]

# IP
total_grades = 0
total_students_found = 0
for data in enrollment:
    if data != None and data['enrolled'] > 1:
        total_grades += data['grade']
        total_students_found += 1
        
average = total_grades / total_students_found

# FP
arr = (pydash.chain(enrollment)
           .filter_(lambda student: student['enrolled'] > 1)
           .map_(lambda student: student['grade'])
           .value())

average(arr)
```

이와 같이 FP는 코드의 로직을 일일이 파고들 필요 없이 온갖 제어 로직을 추상할 수 있으며, 물 흐르듯이 매끄럽게 처리할 수 있다.

에러 처리는 부수효과를 일으키기 때문에 순수 함수 내부에서는 사용하지 않는 것이 좋다. 그러나 현실 세계에서는 에러 처리를 완전히 배제할 수 없기에 이에 대한 처리도 역시 필요한 것이 사실이다. 이에 대한 처리는 추후에 다룬다.

## 복잡한 비동기 애플리케이션에서도 신속하게 반응
비동기 코드를 다루다 보면 코드는 복잡해지기 나름이다. 깊은 콜백 지옥, 온갖 조건문이 난무한다. 이러한 것들을 가볍고, 또 가독성 좋게 처리하는 방법을 FP가 제공한다. 이에 대한 내용은 마지막 장에서 다룬다.