import re
import toolz as tz
import pydash
import operator

def compose1():
    s = str('We can only see a short distance '
            'ahead but we can see plenty there '
            'that needs to be done')
    
    regex = re.compile('\s+')
    explode = lambda s: regex.split(s)
    count = lambda arr: len(arr)
    count_words = tz.compose(count, explode)
    print(count_words(s))
    
def compose2():
    students = ['Rosser', 'Turing', 'Kleene', 'Church']
    grades = [80, 100, 90, 99]
    smartest_student = tz.compose(
        lambda data: data[0],
        pydash.head,
        pydash.reverse,
        lambda arr: sorted(arr, key=operator.itemgetter(1)),
        pydash.zip_)
    
    print(smartest_student(students, grades))
    
def compose3():
    trim = lambda str: re.search('^\s*|\s*$', str).string
    normalize = lambda str: ''.join(re.split('\-', str))
    valid_length = lambda length, str: len(str) == length
    check_length_ssn = pydash.partial(valid_length, 9)
    
    clean_input = tz.compose(normalize, trim)
    is_valid_ssn = tz.compose(check_length_ssn, clean_input)
    
    print(clean_input('444-44-4444'))
    print(is_valid_ssn('444-44-4444'))