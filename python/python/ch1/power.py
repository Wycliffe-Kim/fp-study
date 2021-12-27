import math
import pydash

array = range(10)

def power_ip():
    result = []
    for data in array:
        result.append(math.pow(data, 2))
        
    print('power_ip', result)
    
power_fp = lambda: print('power_fp', pydash.map_(array, lambda num: math.pow(num, 2)))

power = [
    power_ip,
    power_fp
]