import pydash

class IO:
    def __init__(self, effect):
        if not pydash.is_function(effect):
            raise TypeError('IO 사용법: 함수는 필수입니다!')
        self._effect = effect
        
    @staticmethod
    def of(value):
        return IO(lambda: value)
      
    @staticmethod
    def from_func(f):
        return IO(f)
      
    def map(self, f):
        return IO(lambda: f(self._effect()))
      
    def chain(self, f):
        return f(self._effect())
      
    def run(self):
        return self._effect()