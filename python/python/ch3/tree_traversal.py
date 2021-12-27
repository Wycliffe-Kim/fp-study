from ..ch2.Person import Person_fp
from .Tree import Tree
from .TreeNode import TreeNode

def tree_traversal():
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
    
    print('treeTraversal_fp');
    Tree.map(church, lambda p: print(p.fullname));