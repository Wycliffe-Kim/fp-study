class Wrapper:
    def __init__(self, value):
        self._value = value
        
    def map(self, f):
        return f(self._value)
      
    def fmap(self, f):
        return Wrapper(f(self._value))
      
    def to_string(self):
        return f'Wrapper({self._value})'