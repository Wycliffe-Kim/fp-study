class Maybe:
    @property
    def is_nothing(self):
        return False
      
    @property
    def is_just(self):
        return False
    
    @staticmethod
    def just(value):
        return Just(value)
      
    @staticmethod
    def nothing():
        return Nothing()
      
    @staticmethod
    def from_nullable(value):
        return Maybe.just(value) if value != None else Maybe.nothing()
      
    @staticmethod
    def of(value):
        return Maybe.just(value)
    
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
        return Maybe.from_nullable(f(self._value))
      
    def get_or_else(self, other=None):
        return self._value
      
    def filter(self, f):
        Maybe.from_nullable(self._value if f(self._value) else None)
        
    def chain(self, f):
        return f(self._value)
      
    def __str__(self):
        return f'Maybe.Just({self._value})'
    
class Nothing(Maybe):
    _value = None
    
    @property
    def value(self):
        raise TypeError('Nothing 값을 가져올 수 없습니다.')

    @property
    def is_nothing(self):
        return True
      
    def map(self, f=None):
        return self
      
    def get_or_else(self, other):
        return other
      
    def filter(self, f=None):
        return self._value
      
    def chain(self, f=None):
        return self
      
    def __str__(self):
        return 'Maybe.Nothing'