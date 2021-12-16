from .Left import Left
from .Right import Right

class EitherFactory:
    @staticmethod
    def left(value):
        return Left(value)
      
    @staticmethod
    def right(value):
        return Right(value)
      
    @staticmethod
    def from_nullable(value):
        return EitherFactory.right(value) if value != None else EitherFactory.left(value)
      
    @staticmethod
    def of(value):
        return EitherFactory.right(value)