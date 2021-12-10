import re
import toolz as tz

def compose():
    s = str('We can only see a short distance '
            'ahead but we can see plenty there '
            'that needs to be done')
    
    regex = re.compile('\s+')
    explode = lambda s: regex.split(s)
    count = lambda arr: len(arr)
    count_words = tz.compose(count, explode)
    print(count_words(s))