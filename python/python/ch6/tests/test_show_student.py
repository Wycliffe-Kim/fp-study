import unittest

from python.ch1.db import StudentDB, find_from_db

class ShowStudentTest(unittest.TestCase):
    db = StudentDB()
    ssn = '444-44-4444'
    result = f'studentD, D, {ssn}'
    
    def test_from_function(self):
        student = find_from_db(self.db, self.ssn)
        assert self.fullname(student) == self.result
      
    def test_from_method(self):
        student = self.db.find(self.ssn)
        assert self.fullname(student) == self.result

    def fullname(self, student): 
        return f'{student["firstname"]}, {student["lastname"]}, {student["ssn"]}'
