import re
import toolz as tz
import pydash
import operator

def compose():
    s = str('We can only see a short distance '
            'ahead but we can see plenty there '
            'that needs to be done')
    
    regex = re.compile('\s+')
    explode = lambda s: regex.split(s)
    count = lambda arr: len(arr)
    count_words = tz.compose(count, explode)
    print(count_words(s))
    
    students = ['Rosser', 'Turing', 'Kleene', 'Church']
    grades = [80, 100, 90, 99]
    smartest_student = tz.compose(
        lambda data: data[0],
        pydash.head,
        pydash.reverse,
        lambda arr: sorted(arr, key=operator.itemgetter(1)),
        pydash.zip_)
    
    print(smartest_student(students, grades))