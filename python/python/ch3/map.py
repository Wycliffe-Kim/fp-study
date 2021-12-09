import pydash
from ..ch2.Address import Address
from ..ch2.Person import Person_ip, Person_fp

def map_ip():
    p1 = Person_ip('Haskel', 'Curry', '111-11-1111');
    p1.address = Address('US');
    p1.birth_year = 1900;

    p2 = Person_ip('Barkley', 'Rosser', '222-22-2222');
    p2.address = Address('Greece');
    p2.birth_year = 1907;

    p3 = Person_ip('John', 'von Neumann', '333-33-3333');
    p3.address = Address('Hungary');
    p3.birth_year = 1903;

    p4 = Person_ip('Alonzo', 'Church', '444-44-4444');
    p4.address = Address('US');
    p4.birth_year = 1903;
    
    result = []
    persons = [p1, p2, p3, p4]
    
    for person in persons:
        if person != None:
            result.append(person.fullname)
            
    print('map_ip', result)

def map_fp():
    p1 = Person_fp('Haskel', 'Curry', '111-11-1111');
    p1.address = Address('US');
    p1.birth_year = 1900;

    p2 = Person_fp('Barkley', 'Rosser', '222-22-2222');
    p2.address = Address('Greece');
    p2.birth_year = 1907;

    p3 = Person_fp('John', 'von Neumann', '333-33-3333');
    p3.address = Address('Hungary');
    p3.birth_year = 1903;

    p4 = Person_fp('Alonzo', 'Church', '444-44-4444');
    p4.address = Address('US');
    p4.birth_year = 1903;
    
    fullname = lambda person: f'{person.firstname} {person.lastname}'
    
    persons = [p1, p2, p3, p4]
    result = pydash.map_(persons, fullname)
    
    print('map_fp', result)