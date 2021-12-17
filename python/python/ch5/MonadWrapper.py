class MonadWrapper:
    def __init__(self, value):
        self._value = value
        
    @staticmethod
    def of(value):
        return MonadWrapper(value)
      
    def map(self, f):
        return MonadWrapper.of(f(self._value))
      
    def join(self):
        if not isinstance(self._value, MonadWrapper):
            return self
          
        return self._value.join()
      
    def get(self):
        return self._value
      
    def __str__(self):
        return f'Wrapper({self._value})'