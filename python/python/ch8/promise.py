import pydash

from ..ch5.IO import IO
from .average import average
from .get_json import get_json_promise

def promise():
    log = pydash.curry(lambda title, message: print(title, message))
    
    map = pydash.curry(lambda func, arr: pydash.map_(arr, func))
    
    (get_json_promise('http://localhost:5555/students')
     .then(map(lambda student: student['grade']))
     .then(average)
     .then(lambda grade: IO.of(grade).map(log('promise success')).run())
     .catch(lambda error: log('promise fail', error)))