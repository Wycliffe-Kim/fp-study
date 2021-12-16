import pydash

class Tree:
    def __init__(self, root):
        self._root = root
        
    @staticmethod
    def map(node, fn, tree=None):
        node.value = fn(node.value)
        if tree == None:
            tree = Tree(node)
            
        if node.has_children():
            pydash.map_(node.children, lambda child: Tree.map(child, fn, tree))
            
        return tree
      
    @property
    def root(self):
        return self._root