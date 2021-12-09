import toolz as tz

input = [80, 90, 100]

def average_ip():
    sum = 0
    for data in input:
        sum += data
        
    average = sum / len(input)
    print('average_ip', average)
    
def average_fp():
    print('average_fp', _average_fp(input))
    
enrollment = [
    { 'enrolled': 2, 'grade': 100 },
    { 'enrolled': 2, 'grade': 80 },
    { 'enrolled': 1, 'grade': 89 }
]

def average_grade_ip():
    total_grades = 0
    total_students_found = 0
    for data in enrollment:
        if data != None and data['enrolled'] > 1:
            total_grades += data['grade']
            total_students_found += 1
            
    average = total_grades / total_students_found
    print('averageGrade_ip', average)
    
def average_grade_fp():
    map_curry = tz.curry(tz.map)
    grade = map_curry(lambda student: student['grade'])
    
    filter_curry = tz.curry(tz.filter)
    enrolled = filter_curry(lambda student: student['enrolled'] > 1)
    
    average = tz.compose(
        _average_fp, 
        list, 
        grade, 
        list, 
        enrolled)
    
    print('averageGrade_fp', average(enrollment))

def _average_fp(arr):
    sum = lambda total, current: total + current
    total = lambda arr: tz.reduce(sum, arr)
    size = lambda arr: len(arr)
    divide = lambda a, b: a / b
    return divide(total(arr), size(arr))