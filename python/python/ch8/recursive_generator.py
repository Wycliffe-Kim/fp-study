from ..ch2.Person import Person_fp
from ..ch3.TreeNode import TreeNode

def recursive_generator1():
    def all_student_generator():
        yield 'Church'
        
        yield 'Rosser'
        yield from rosser_student_generator()
        
        yield 'Turing'
        yield from turing_student_generator()
        
        yield 'Kleene'
        yield from kleene_student_generator()
        
    def rosser_student_generator():
        yield 'Mendelson'
        yield 'Sacks'
        
    def turing_student_generator():
        yield 'Gandy'
        
    def kleene_student_generator():
        yield 'Nelson'
        yield 'Constable'
        
    students = []
    for student in all_student_generator():
        students.append(student)
    
    print('recursive_generator1', students)
    
def recursive_generator2():
    def tree_traversal(node: TreeNode):
        yield node.value
        if node.has_children():
            for child in node.children:
                yield from tree_traversal(child)
                
    church = TreeNode(Person_fp('Alonzo', 'Church', '111-11-1111'));
    rosser = TreeNode(Person_fp('Barkley', 'Rosser', '222-22-2222'));
    turing = TreeNode(Person_fp('Alan', 'Turing', '333-33-3333'));
    kleene = TreeNode(Person_fp('Stephen', 'Kleene', '444-44-4444'));
    mendelson = TreeNode(Person_fp('5', 'Mendelson', '555-55-5555'));
    sacks = TreeNode(Person_fp('6', 'Sacks', '666-66-6666'));
    gandy = TreeNode(Person_fp('7', 'Gandy', '777-77-7777'));
    nelson = TreeNode(Person_fp('8', 'Nelson', '888-88-8888'));
    constable = TreeNode(Person_fp('9', 'Constable', '999-99-9999'));
  
    church.append(rosser).append(turing).append(kleene);
    kleene.append(nelson).append(constable);
    rosser.append(mendelson).append(sacks);
    turing.append(gandy);
    
    def lastname(person: Person_fp):
        return person.lastname
      
    persons = []
    for person in tree_traversal(church):
        persons.append(lastname(person))

    print('recursive_generator2', persons)
  
recursive_generator = [
    recursive_generator1,
    recursive_generator2
]