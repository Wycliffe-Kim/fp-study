import toolz as tz

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
    result = tz.compose(
        list,
        tz.sorted,
        list,
        tz.curry(tz.map)(lambda name: name.replace(name[0], name[0].upper())),
        list,
        tz.unique,
        list,
        tz.curry(tz.map)(lambda name: name.replace('_', ' ')),
        list,
        tz.curry(tz.filter)(lambda name: name != None)
    )(names)
    
    print('sort_fp', result)