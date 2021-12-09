from .db import StudentDB
import toolz as tz

student_db = StudentDB()
ssn = '444-44-4444'

def show_student_ip():
    student = student_db.find(ssn)
    if student != None:
        print('show_student_ip', f'{student["ssn"]}, {student["firstname"]}, {student["lastname"]}')
    else:
        raise ValueError('학생을 찾을 수 없습니다.')
      
def show_student_fp():
    def db_find(db, id):
        obj = db.find(id)
        if obj == None:
            raise ValueError('학생을 찾을 수 없습니다.')
        return obj
      
    find_from = tz.curry(db_find)
    make_string = lambda student: f'{student["ssn"]}, {student["firstname"]}, {student["lastname"]}'
    log = lambda info: print('show_student_fp', info)
    
    show_student = tz.compose(
      log,
      make_string,
      find_from(student_db)
    )
    
    show_student(ssn)