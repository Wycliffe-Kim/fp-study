import pydash

def partial():
    def many_arg_function(a, b, c, d, e):
        return a + b + c + d + e
      
    plus_four = pydash.partial(many_arg_function, 1, 1, 1, 1)
    print(plus_four(4))