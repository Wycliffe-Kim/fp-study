import pydash
import toolz as tz
from .check_performance import check_performance

global count
count = 0

def memoize():
    def add(a, b):
        global count
        count += 1
        return a + b
      
    def log_count(): 
        global count
        print(count)
        
    def reset_count():
        global count
        count = 0
        
    def loop(func):
        pydash.for_each(range(1000000), func)
    
    add_memoized = pydash.memoize(add)
    
    def check_performance_plus_count(name, func):
        return tz.compose(
            lambda v: log_count(),
            lambda v: check_performance(name, func),
            reset_count
        )()
        
    check_performance_plus_count('add', lambda: loop(lambda: add(1, 2)))
    check_performance_plus_count('add_memoized', lambda: loop(lambda: add_memoized(1, 2)))