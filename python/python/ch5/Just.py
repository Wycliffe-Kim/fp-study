from .Maybe import Maybe
from .MaybeFactory import MaybeFactory

class Just(Maybe):
    def __init__(self, value):
        self._value = value
        
    @property
    def value(self):
        return self._value
      
    @property
    def is_just():
        return True
      
    def map(self, f):
        return MaybeFactory.from_nullable(f(self._value))
      
    def get_or_else(self, other=None):
        return self._value
      
    def filter(self, f):
        MaybeFactory.from_nullable(self._value if f(self._value) else None)
        
    def chain(self, f):
        return f(self._value)
      
    def __str__(self):
        return f'Maybe.Just({self._value})'