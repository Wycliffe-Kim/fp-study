import pydash
import rx
from rx.operators import map, filter

from .from_promise import from_promise
from .get_json import get_json_promise
from .average import average

context = 'reactive_programming'
def start_context_logging(index):
    print(f'{context}{index}')

def reactive_programming1():
    start_context_logging(1)
    
    def observable_func(observer, scheduler):
        pydash.for_each(range(1, 10), lambda i: observer.on_next(i))
        observer.on_completed()
        
    observable = rx.create(observable_func)
    observable.subscribe(
      on_next= lambda x: print('next', x),
      on_completed= lambda: print('complete'),
    )
  
def reactive_programming2():
    start_context_logging(2)
    
    def squares(amount):
        return rx.create(lambda observer, scheduler: pydash.for_each(range(1, amount + 1), lambda i: observer.on_next(i * i)))
      
    squares(5).subscribe(lambda x: print(f'다음: {x}'))
  
def reactive_programming3():
    start_context_logging(3)
    
    (rx.of(1, 2, 3, 4, 5)
     .pipe(
       filter(lambda x: x % 2 != 0),
       map(lambda x: x * x)
     )
     .subscribe(lambda x: print(f'다음: {x}')))
  
def reactive_programming4():
    start_context_logging(4)
    
    _map = pydash.curry(lambda func, arr: pydash.map_(arr, func))
    
    (from_promise(get_json_promise('http://localhost:5555/students'))
     .pipe(
       map(_map(lambda student: student['grade'])),
       map(average)
     )
     .subscribe(
       on_next= lambda student: print(student),
       on_error= lambda err: print(err)
       ))

reactive_programming = [
    reactive_programming1,
    reactive_programming2,
    reactive_programming3,
    reactive_programming4
]