import pydash

from ..ch5.IO import IO
from .average import average
from .get_json import get_json_callback

def callback_hell():
    log = pydash.curry(lambda title, message: print(title, message))
    
    def success(data):
        grades = pydash.map_(data, lambda student: student['grade'])
        grade = average(grades)
        io = lambda grade: IO.of(grade).map(log('callback_hell success')).run()
        io(grade)
      
    def fail(err):
        log('callback_hell fail', err)
      
    get_json_callback('http://localhost:5555/students', success, fail)