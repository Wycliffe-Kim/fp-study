# 함수형 프로그래밍 특징
함수형 프로그래밍의 특징은 다음과 같다.
- 선언적 프로그래밍
- 순수함수
- 참조 투명성
- 불변성

## 함수형 프로그래밍은 선언적이다
이는 내부적으로는 코드를 어떻게 구현했는지, 데이터는 어떻게 흘러가는지 밝히지 않은 채 연산/작업을 표현하는 사상이다.

C#, C++ 등의 구조적/객체지향 언어가 지원하는 명령형(Imperative), 혹은 절차적(Procedural) 모델과는 다르다. 참고로 명령형 프로그래밍(IP. Imperative Programming)은 어떤 결과를 내기 위해 시스템의 상태를 변경하는 구문을 위에서 아래로 죽 늘어놓은 순차열(sequence)에 불과하다.

다음은 배열을 모두 제곱수로 바꾸는 IP의 간단한 예제다.

``` javascript
// javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array.length; i++) {
  array[i] = Math.pow(array[i], 2);
}
```

``` python
# python
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for i in range(len(array)):
    array[i] = array[i]**2
```

IP는 위와 같이 컴퓨터가 원하는 작업을 **어떻게** 하는지 상세히 이른다.

그러나 FP는 서술부와 평가부를 분리하여 제어 흐름이나 상태 변화를 특정하지 않고 프로그램 로직을 표현식으로 나타낸다.

다음은 위의 연산을 FP로 바꾼 예제다.

``` javascript
// javascript
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => Math.pow(num 2));
```

``` python
# python
import pydash
pydash.map_([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], lambda num: num**2)
```

FP은 무상태성과 불변성을 지향한다. 이처럼 부수효과와 상태 변이를 일으키지 않으려면 순수함수를 사용해야 한다.

## 순수함수와 부수효과
순수함수의 특성은 다음과 같다.
- 주어진 입력에만 의존할 뿐, 평가 도중 또는 호출 간 변경될 수 있는 숨겨진 값이나 외부 상태와 무관하게 동작한다.
- 전역 객체나 레퍼런스로 전달된 매개변수를 수정하는 등 함수 스코프 밖에서 어떠한 변경도 일으키지 않는다.

부수효과를 일으키는 코드, 즉 외부 상태에 의존한 불순한 함수의 예는 다음의 간단한 예로 볼 수 있다.

```javascript
// javascript
let counter = 0;
function inc() {
  counter += 1;
  return counter;
}
```

```python
# python
global counter
counter = 0
def inc():
    global counter
    counter += 1
    return counter
```

그러나 실질적으로 프로그램을 개발하다 보면 순수함수만으로 모든 것을 구성할 수는 없다. 특히 DB에 접근하거나, UI에 출력을 해야하는 등의 작업들은 외부 상태에 의존하기 때문에 부수효과를 일으킬 수 있다.

그러나 FP는 모든 상태변이를 근절하자는 사상이 아니다. 최대한 이를 줄이기 위해 순수/불순 함수를 구분하자는 것이다.

부수효과를 일으키는 IP의 실질적인 예를 살펴보자.

```javascript
// javascript
function showStudent(ssn) {
  let student = db.find(ssn);
  if (student !== null) {
    console.log(`${student.ssn}, ${student.firstname}, ${student.lastname}`);
  } else {
    throw new Error('학생을 찾을 수 없습니다.');
  }
}

showStudent('444-44-4444');
```

```python
# python
def show_student(ssn):
    student = db.find(ssn)
    if student != None:
        print(f'{student["ssn"]}, {student["firstname"]}, {student["lastname"]}')
    else:
        raise ValueError('학생을 찾을 수 없습니다.')

show_student(ssn)
```

이 코드에서 볼 수 있는 내용들은 다음과 같다.
- 변수 `db`를 통해 데이터에 접근하는데, 함수 서명에는 이런 매개변수가 없으니 이는 외부 변수다. 이 변수 때문에 프로그램의 무결성은 언제든지 깨질 수 있다.
- IO에 직접 접근한다(e.g. `print`, `console.log`)
- 학생 레코드를 찾지 못해 예외를 던지면 전체 프로그램의 스택이 풀리면서 종료될 것이다.

이러한 코드는 외부 자원에 의존하므로 유연하지 않고 다루기가 힘들며 테스트하기도 어렵다.

반면 순수함수는 서명에 정규 매개변수(입력 집합)를 빠짐없이 명시하기에 이해하고 사용하기 쉽다.

위의 코드를 지금은 부족하더라도 FP에 적합하게 다시 작성해보도록 하자. 지금은 다음의 두 가지를 지켜서 작성한다.
- 긴 함수를 하나의 목적을 가진 짧은 함수로 각각 분리한다.
- 함수가 해야 할 작업에 필요한 인수를 모두 명시하여 부수효과 개수를 줄인다.

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

위와 같이 작업하면 다음의 장점들을 가져갈 수 있다.
- 재사용한 컴포넌트가 3개로 나뉘어 코드가 유연해진다.
- 잘게 나뉜 함수를 사용하면 신경 써서 관리할 코드의 크기가 감소한다.
- 프로그램이 해야할 일에 집중하므로 가독성이 향상된다.
- 순수하지 않은 로직을 분리할 수 있다(DB, IO write).

## 참조 투명성과 치환성
어떤 함수가 동일한 입력을 받았을 때 동일한 결과를 내면 이를 **참조 투명한** 함수라고 한다.

예를 들어 이전에 보았던 `inc` 함수는 참조 투명하지 않다. 왜냐하면 외부 변수인 `counter`에 종속적인 값을 내기 때문이다.

이를 참조 투명하게 바꾸려면 다음과 같이 바꾸어야 한다.

``` javascript
// javascript
const inc = (counter) => counter + 1;
```

``` python
# python
inc = lambda counter: counter + 1
```

참조 투명한 함수의 조합의 예를 하나 살펴보도록 하자. 다음은 평균을 구하는 프로그램이다.

``` javascript
// javascript
function average(arr) {
  const sum = (total, current) => total + current;
  const total = (arr) => arr.reduce(sum);
  const size = (arr) => arr.length;
  const divide = (a, b) => a / b;
  return divide(total(arr), size(arr));
}

average([80, 90, 100]);
```

``` python
# python
def average(arr):
    sum = lambda total, current: total + current
    total = lambda arr: pydash.reduce_(arr, sum)
    size = lambda arr: len(arr)
    divide = lambda a, b: a / b
    return divide(total(arr), size(arr))

average([80, 90, 100])
```

## 불변 데이터 유지하기
기본값들은 대개 불변이지만 배열 등의 객체는 불변이 아니어서 함수로 전달하면 원래 내용이 변경되어 부수효과가 발생할 소지는 남아 있다.
이러한 데이터를 불변하도록 유지하는 방법은 다음 장 이후에 논의한다.