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
from .prop import prop

def monad1():
    data = (MonadWrapper.of('Hello Monads!')
            .map(pydash.to_upper)
            .map(pydash.identity))
    
    print(data.join().get())
    
def monad2():
    find_object = pydash.curry(lambda db, id: MonadWrapper.of(find_from_db(db, id)))
    get_first_name = lambda student: MonadWrapper.of(student.map(prop('firstname')))
    student_first_name = tz.compose(
      get_first_name,
      find_object(StudentDB())
    )
    
    print(student_first_name('444-44-4444').join().get())
    
def monad_maybe():
    safe_find_object = pydash.curry(lambda db, id: MaybeFactory.from_nullable(find_from_db(db, id)))
    safe_find_student = safe_find_object(StudentDB())
    address = safe_find_student('444-44-4444').map(prop('address')).get_or_else('주소가 없습니다.')
    ssn = safe_find_student('444-44-4444').map(prop('ssn')).get_or_else('SSN이 없습니다.')
    
    print(address, ssn)
    
def monad_lift():
    find_object = pydash.curry(find_from_db)
    safe_find_object = lambda prop_name: tz.compose(lift(prop(prop_name)), find_object)
    safe_find_address = safe_find_object('address')
    safe_find_ssn = safe_find_object('ssn')
    address = safe_find_address(StudentDB(), '444-44-4444').get_or_else('주소가 없습니다.')
    ssn = safe_find_ssn(StudentDB(), '444-44-4444').get_or_else('SSN이 없습니다.')

    print(address, ssn)
  
def monad_either():
    safe_find_object = pydash.curry(lambda db, id: EitherFactory.from_nullable(find_from_db(db, id)))
    safe_find_student = safe_find_object(StudentDB())
    safe_find_student('444-44-4444').map(prop('address')).or_else(lambda val: print('error', val))
    print(safe_find_student('444-44-4444').map(prop('ssn')).get_or_else('SSN이 없습니다.'))
  
def monad_io():
    read = pydash.curry(lambda db, id: lambda: find_from_db(db, id))
    write = pydash.curry(lambda error, message: print('error' if error else 'info', message))
    
    io_chain = (IO.from_func(read(StudentDB(), '444-44-4444'))
                .map(prop('firstname'))
                .map(pydash.start_case)
                .map(write(False)))
    io_chain.run()
  
def monad_chain():
    valid_length = lambda length, string: len(string) == length
    check_length_ssn = lambda ssn: EitherFactory.right(ssn) if valid_length(9, ssn) else EitherFactory.left('잘못된 ssn입니다.')
    
    def safe_find_object_curry(db, id):
        val = find_from_db(db, id)
        return EitherFactory.right(val) if val else EitherFactory.left(f'ID가 {id}인 객체를 찾을 수 없습니다.')
    safe_find_object = pydash.curry(safe_find_object_curry)
    find_student = safe_find_object(StudentDB())
    clean_input = tz.compose(normalize, trim)
    
    show_student = lambda ssn: (EitherFactory
      .from_nullable(ssn)
      .map(clean_input)
      .chain(check_length_ssn)
      .chain(find_student))
    
    print(show_student('444-44-4444'))
  
def monad_compose():
    valid_length = lambda length, string: len(string) == length
    check_length_ssn = lambda ssn: EitherFactory.right(ssn) if valid_length(9, ssn) else EitherFactory.left('잘못된 ssn입니다.')
    
    def safe_find_object_curry(db, id):
        val = find_from_db(db, id)
        return EitherFactory.right(val) if val else EitherFactory.left(f'ID가 {id}인 객체를 찾을 수 없습니다.')
    safe_find_object = pydash.curry(safe_find_object_curry)
    find_student = safe_find_object(StudentDB())
    clean_input = tz.compose(normalize, trim)
    
    map = pydash.curry(lambda f, container: container.map(f))
    chain = pydash.curry(lambda f, container: container.chain(f))
    get_or_else = pydash.curry(lambda message, container: container.get_or_else(message))
    tap = pydash.curry(lambda interceptor, value: pydash.tap(value, interceptor))
    
    show_student = tz.compose(
      get_or_else('찾을 수 없습니다.'),
      tap(print),
      map(prop('address')),
      tap(print),
      find_student
    )
    
    result = show_student('444-44-4444')
    print(result)