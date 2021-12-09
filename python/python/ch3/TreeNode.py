class TreeNode:
    def __init__(self, val):
        self._val = val
        self._parent = None;
        self._children = []
        
    def is_root(self):
        return self._parent == None
      
    @property
    def children(self):
        return self._children
      
    def has_children(self):
        return len(self._children) > 0
      
    @property
    def value(self):
        return self._val
      
    @value.setter
    def value(self, value):
        self._val = value
        
    def append(self, child):
        child._parent = self
        self._children.append(child)
        return self
      
    def to_string(self):
        return f'Node (val: {self._val}, children: {len(self._children)})'