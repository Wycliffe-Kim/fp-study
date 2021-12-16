from .Either import Either
from .EitherFactory import EitherFactory

class Right(Either):
    def map(self, f):
        return EitherFactory.from_nullable(f(self._value))
      
    def get_or_else(self, other=None):
        return self._value
      
    def or_else(self):
        return self
      
    def chain(self, f):
        return f(self._value)
      
    def get_or_else_throw(self):
        return self._value
      
    def filter(self, f):
        return EitherFactory.from_nullable(self._value if f(self._value) else None)
      
    def to_string(self):
        return f'Either.Right({self._value})'