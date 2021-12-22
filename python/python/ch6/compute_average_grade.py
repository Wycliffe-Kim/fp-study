import pydash
import toolz as tz

def fork(join, func1, func2): 
    def inner_fork(value):
        return join(func1(value), func2(value))
    return inner_fork

def to_letter_grade(grade):
    if grade >= 90:
        return 'A'
    if grade >= 80:
        return 'B'
    if grade >= 70:
        return 'C'
    if grade >= 60:
        return 'D'
    return 'F'
  
def compute_average_grade(arr):
    compose_func = tz.compose(
        to_letter_grade,
        fork(
            pydash.divide, 
            pydash.sum_, 
            pydash.size
        )
    )
    return compose_func(arr)
