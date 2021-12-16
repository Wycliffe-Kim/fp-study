import pydash
import toolz as tz

from .MonadWrapper import MonadWrapper
from ..ch1.db import StudentDB, find_from_db
from .MaybeFactory import MaybeFactory
from .lift import lift
from .EitherFactory import EitherFactory
from .IO import IO
from ..ch4.normalize import normalize
from ..ch4.trim import trim

def monad1():
    data = (MonadWrapper.of('Hello Monads!')
            .map(pydash.to_upeer)
            .map(pydash.identity))
    
    print(data.join().get())
    
def monad2():
    find_object = pydash.curry(lambda db, id: MonadWrapper.of(find_from_db(db, id)))
    get_first_name = lambda student: MonadWrapper.of(student.map(pydash.prop('firstname')))
    student_first_name = tz.compose(
      get_first_name,
      find_object(StudentDB())
    )
    
    print(student_first_name('444-44-4444').join().get())
    
    