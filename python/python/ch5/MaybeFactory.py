from .Just import Just
from .Nothing import Nothing

class MaybeFactory:
    @staticmethod
    def just(value):
        return Just(value)
      
    @staticmethod
    def nothing():
        return Nothing()
      
    @staticmethod
    def from_nullable(value):
        return MaybeFactory.just(value) if value != None else MaybeFactory.nothing()
      
    @staticmethod
    def of(value):
        return MaybeFactory.just(value)