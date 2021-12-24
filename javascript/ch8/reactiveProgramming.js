const _ = require('lodash');
const R = require('ramda');
const { Observable, of, from } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const average = require('./average');
const { getJSONPromise } = require('./getJSON');

const context = 'reactiveProgramming';
const startContextLogging = (index) => console.log(`${context}${index}`);

const reactiveProgramming = [
  () => {
    startContextLogging(1);

    const observable = new Observable((subscriber) => {
      _.range(1, 10).forEach((i) => subscriber.next(i));
      subscriber.complete();
    });

    observable.subscribe({
      next(x) { console.log('next', x); },
      complete() { console.log('complete'); }
    });
  },

  () => {
    startContextLogging(2);
    
    const squares = (amount) => 
      new Observable((subscriber) => 
        _.range(1, amount + 1).forEach((i) => subscriber.next(i * i)));
  
    squares(5).subscribe((x) => console.log(`다음: ${x}`));
  },

  () => {
    startContextLogging(3);

    of(1, 2, 3, 4, 5)
    .pipe(
      filter((x) => x % 2 !== 0),
      map((x) => x * x)
    )
    .subscribe((x) => console.log(`다음: ${x}`));
  },

  () => {
    startContextLogging(4);

    from(getJSONPromise('http://localhost:5555/students'))
    .pipe(
      map(R.map((student) => student.grade)),
      map(average),
    )
    .subscribe({
      next(student) { console.log(student) },
      error(err) { console.log(err) }
    });
  }
];

module.exports = reactiveProgramming;