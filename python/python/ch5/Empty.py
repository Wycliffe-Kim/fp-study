class Empty:
    def map(self, val=None):
        return self
    
    def fmap(self, val=None):
        return Empty()
    
    def __str__(self):
        return 'Empty()'