from .Address import Address

class Person:
    def __init__(self, firstname, lastname, ssn):
        self.firstname = firstname
        self.lastname = lastname
        self.ssn = ssn
        self.address = Address('')
        self.birth_year = 0
        
    def __str__(self):
        return f'{self.firstname}, {self.lastname}, {self.ssn}, {self.address}, {self.birth_year}'
        
    @property
    def fullname(self):
        return f'{self.firstname} {self.lastname}'
      
class Person_ip(Person):
    def people_in_same_country(self, friends):
        result = []
        for friend in friends:
            if self.address.country == friend.address.country:
                result.append(friend)
                
        return result
      
class Person_fp(Person):
    pass