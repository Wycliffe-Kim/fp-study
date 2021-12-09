import toolz as tz

class StudentDB:
    def __init__(self):
        self.students = [
            {
                'firstname': 'student',
                'lastname': 'A',
                'ssn': '111-11-1111'
            },
            {
                'firstname': 'student',
                'lastname': 'B',
                'ssn': '222-22-2222'
            },
            {
                'firstname': 'student',
                'lastname': 'C',
                'ssn': '333-33-3333'
            },
            {
                'firstname': 'student',
                'lastname': 'D',
                'ssn': '444-44-4444'
            },
        ]
        
    def find(self, ssn):
        return list(tz.filter(lambda student: student['ssn'] == ssn, self.students))[0]