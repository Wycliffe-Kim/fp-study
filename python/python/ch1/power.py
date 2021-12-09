import math
import toolz as tz

array = range(10)

def power_ip():
    result = []
    for data in array:
        result.append(math.pow(data, 2))
        
    print('power_ip', result)
    
power_fp = lambda: print('power_fp', list(tz.map(lambda num: math.pow(num, 2), array)))