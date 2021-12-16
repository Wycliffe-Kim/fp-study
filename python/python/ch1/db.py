import toolz as tz

class StudentDB:
    def __init__(self):
        self.students = [
            {
                'firstname': 'studentA',
                'lastname': 'A',
                'ssn': '111-11-1111'
            },
            {
                'firstname': 'studentB',
                'lastname': 'B',
                'ssn': '222-22-2222'
            },
            {
                'firstname': 'studentC',
                'lastname': 'C',
                'ssn': '333-33-3333'
            },
            {
                'firstname': 'studentD',
                'lastname': 'D',
                'ssn': '444-44-4444'
            },
        ]
        
    def find(self, ssn):
        return list(tz.filter(lambda student: student['ssn'] == ssn, self.students))[0]
    
def find_from_db(db, ssn):
    list(tz.filter(lambda student: student['ssn'] == ssn, db.students))[0]