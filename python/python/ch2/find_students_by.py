from .Address import Address
from .Student import Student_ip, Student_fp
import toolz as tz

def find_students_by_ip():
    curry = Student_ip('Haskell', 'Curry', '111-11-1111', 'Penn State')
    curry.address = Address('US')
    
    turing = Student_ip('Alan', 'Turing', '222-22-2222', 'Princeton');
    turing.address = Address('England');

    church = Student_ip('Alonzo', 'Church', '333-33-3333', 'Princeton');
    church.address = Address('US');

    kleene = Student_ip('Stephen', 'Kleene', '444-44-4444', 'Princeton');
    kleene.address = Address('US');
    
    print('find_students_by_ip', church.students_in_same_country_and_school([curry, turing, kleene]))
    
def find_students_by_fp():
    curry = Student_fp('Haskell', 'Curry', '111-11-1111', 'Penn State')
    curry.address = Address('US')
    
    turing = Student_fp('Alan', 'Turing', '222-22-2222', 'Princeton');
    turing.address = Address('England');

    church = Student_fp('Alonzo', 'Church', '333-33-3333', 'Princeton');
    church.address = Address('US');

    kleene = Student_fp('Stephen', 'Kleene', '444-44-4444', 'Princeton');
    kleene.address = Address('US');
    
    selector = lambda country, school: lambda student: student.address.country == country and student.school == school
    
    filter_curry = tz.curry(tz.filter)
    filter_students_by = filter_curry(selector(church.address.country, church.school))
    
    map_curry = tz.curry(tz.map)
    str_students = map_curry(lambda student: str(student))
    
    find_students_by = tz.compose(
        list,
        str_students,
        list,
        filter_students_by
    )
    
    print('find_students_by_fp', find_students_by([curry, turing, kleene]))