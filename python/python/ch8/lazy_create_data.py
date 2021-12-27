import sys
import math

# python에서는 range 제너레이터가 구현되어 있으나 이러한 방식으로 사용할 수 있다는 것을 보이기 위해 예제로 작성한다
def range(start=0, finish=sys.maxsize):
    i = start
    while i < finish:
        yield i
        i += 1
        
def take(amount, generator):
    result = []
    for n in generator:
        result.append(n)
        if n == amount:
            break;
          
    return result
  
def range_with_specification(specification, start=0, finish=sys.maxsize):
    i = start
    while i < finish:
        yield specification(i)
        i += 1

def lazy_create_data1():
    result = []
    for i in range(1):
        result.append(i)
        if i == 3:
            break
    print('lazy_create_data1', result)
    
def lazy_create_data2():
    print('lazy_create_data2', take(3, range(1)))
    
def lazy_create_data3():
    result = []
    for n in range_with_specification(lambda x: int(math.pow(x, 2)), 1, 4):
        result.append(n)
    print('lazy_create_data3', result)

lazy_create_data = [
    lazy_create_data1, 
    lazy_create_data2,
    lazy_create_data3
]