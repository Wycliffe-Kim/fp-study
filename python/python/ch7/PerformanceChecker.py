import pydash

from time import time
from enum import Enum

class CheckerTimeType(Enum):
    sec = 'sec'
    ms = 'ms'
    us = 'us'
        
class PerformanceChecker:
    def __init__(self, name: str, accumulate_mode: bool, digit: int):
        self.begin = 0
        self.end = 0
        self.name = name
        self.accumulate_mode = accumulate_mode
        self.accumulate_time = 0
        self.digit = digit
      
    @property
    def difference(self):
        return self.end - self.begin
    
def reset_checker_accumulate(checker: PerformanceChecker):
    return PerformanceChecker(checker.name, False, checker.digit)

def start_checker_curry(accumulate_mode: bool, digit: int, name: str):
    checker = PerformanceChecker(name, accumulate_mode, digit)
    checker.begin = time()
    return checker

start_checker = pydash.curry(start_checker_curry)

def stop_checker(checker: PerformanceChecker):
    checker.end = time()
    return checker

def diff_checker(checker: PerformanceChecker):
    return checker.difference if checker.accumulate_mode == False else checker.accumulate_time

def diff_string_checker_curry(checker_time_type: CheckerTimeType, checker: PerformanceChecker):
    diff = diff_checker(checker)
    unit = 's'
    if checker_time_type == CheckerTimeType.ms:
        diff *= 1000
        unit = 'ms'
    elif checker_time_type == CheckerTimeType.us:
        diff *= 1000000
        unit = 'us'
    return f'{diff:.{checker.digit}f}{unit}'

diff_string_checker = pydash.curry(diff_string_checker_curry)

def log_checker_curry(checker_time_type: CheckerTimeType, checker: PerformanceChecker):
    print(f'{checker.name}: {diff_string_checker(checker_time_type, checker)}')
    
log_checker = pydash.curry(log_checker_curry)

def map_between_checker_curry(func, checker: PerformanceChecker):
    func()
    return checker

map_between_checker = pydash.curry(map_between_checker_curry)
