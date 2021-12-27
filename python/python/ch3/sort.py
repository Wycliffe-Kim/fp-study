import toolz as tz
import pydash

names = [
    'alonzo church',
    'Haskell curry',
    'stephen_kleene',
    'John Von Neumann',
    'stephen_kleene'
]

def sort_ip():
    result = []
    for n in names:
        if n != None:
            ns = n.replace('_', ' ')
            ns = ns.split(' ')
            for j in range(len(ns)):
                p = ns[j]
                ns[j] = p[0].upper() + p[1:]
                
            if ' '.join(ns) not in result:
                result.append(' '.join(ns))
                
    result.sort()
    
    print('sort_ip', result)
  
def sort_fp():
    result = (pydash.chain(names)
              .filter_(lambda name: name != None)
              .map_(lambda name: name.replace('_', ' '))
              .uniq()
              .map(pydash.start_case)
              .sort()
              .value())
    
    print('sort_fp', result)
    
sort = [
    sort_ip,
    sort_fp
]