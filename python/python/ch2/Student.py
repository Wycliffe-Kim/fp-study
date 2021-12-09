from .Person import Person_ip, Person_fp

class Student_ip(Person_ip):
    def __init__(self, firstname, lastname, ssn, school):
        super().__init__(firstname, lastname, ssn)
        self.school = school
        
    def __str__(self):
        return f'{super().__str__()}, {self.school}'
        
    def students_in_same_country_and_school(self, friends):
        close_friends = super().people_in_same_country(friends)
        result = []
        for friend in close_friends:
            if self.school == friend.school:
                result.append(str(friend))
                
        return result
      
class Student_fp(Person_fp):
    def __init__(self, firstname, lastname, ssn, school):
        super().__init__(firstname, lastname, ssn)
        self.school = school
        
    def __str__(self):
        return f'{super().__str__()}, {self.school}'