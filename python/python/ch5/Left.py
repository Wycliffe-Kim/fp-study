from .Either import Either

class Left(Either):
    @property
    def value(self):
        raise TypeError(f'Left({self._value}) 값을 가져올 수 없습니다.')
      
    def map(self, f=None):
        return self
      
    def get_or_else(self, other):
        return other
      
    def or_else(self, f):
        return f(self._value)
      
    def chain(self, f=None):
        return self
      
    def get_or_else_throw(self, value):
        raise ValueError(value)
      
    def filter(self, f=None):
        return self
      
    def __str__(self):
        return f'Either.Left({self._value})'