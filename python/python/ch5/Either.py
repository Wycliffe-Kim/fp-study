class Either:
    def __init__(self, value):
        self._value = value
        
    @property
    def value(self):
        return self.value
    
    @staticmethod
    def left(value):
        return Left(value)
    
    @staticmethod
    def right(value):
        return Right(value)
    
    @staticmethod
    def from_nullable(value):
        return Either.right(value) if value != None else Either.left(value)
    
    @staticmethod
    def of(value):
        return Either.right(value)
    
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
        return ValueError(value)
    
    def filter(self, f=None):
        return self
    
    def __str__(self):
        return f'Either.Left({self._value})'
    
class Right(Either):
    def map(self, f):
        return Either.from_nullable(f(self._value))
      
    def get_or_else(self, other=None):
        return self._value
      
    def or_else(self):
        return self
      
    def chain(self, f):
        return f(self._value)
      
    def get_or_else_throw(self):
        return self._value
      
    def filter(self, f):
        return Either.from_nullable(self._value if f(self._value) else None)
      
    def __str__(self):
        return f'Either.Right({self._value})'