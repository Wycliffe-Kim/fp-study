import toolz as tz
import pydash
from ..ch2.Address import Address
from ..ch2.Person import Person_ip, Person_fp

def reduce_ip():
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
    
    result = {}
    persons = [p1, p2, p3, p4]
    for person in persons:
        country = person.address.country
        result[country] = 1 if not country in result else result[country] + 1
        
    print('reduce_ip', result)
    
def reduce_fp():
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
    
    persons = pydash.map_([p1, p2, p3, p4], lambda person: person.address.country)
    result = tz.frequencies(persons)
    
    print('reduce_fp', result)