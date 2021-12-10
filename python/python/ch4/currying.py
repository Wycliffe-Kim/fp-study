import pydash

def currying():
    def check_type_for_currying(type_def, obj):
        if not isinstance(obj, type_def):
            raise TypeError(f'형식 불일치: [{type_def}]이어야 하는데, [{type(obj)}]입니다.')
          
        return obj
      
    check_type = pydash.curry(check_type_for_currying)
    
    print(check_type(str)('Curry'))
    print(check_type(int)(3))
    # check_type(str)(42)