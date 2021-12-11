from ..ch1.db import StudentDB
import toolz as tz
import pydash

def impure_and_pure():
    find = lambda db, id: list(tz.filter(lambda student: student['ssn'] == id, db.students))[0]
    
    def find_object_curry(db, id):
        obj = find(db, id)
        if obj == None:
            raise NameError(f'ID가 [{id}]인 객체는 없습니다.')
          
        return obj
    find_object = pydash.curry(find_object_curry)
    
    db = StudentDB()
    find_student = find_object(db)
    full_info = lambda student: f'{student["ssn"]}, {student["firstname"]}, {student["lastname"]}'
    append = pydash.curry(lambda error, info: print('error' if error == True else 'info', info))
    show_student = tz.compose(
      append(False),
      full_info,
      find_student
    )
    
    show_student('444-44-4444')