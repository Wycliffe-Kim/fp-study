from .Maybe import Maybe

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