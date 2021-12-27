from .Wrapper import Wrapper
import pydash

def functor1():
    wrap = lambda val: Wrapper(val)
    wrapped_value = wrap('Get Functional')
    print(wrapped_value.map(pydash.identity))
    print(wrapped_value.map(pydash.to_upper))
    
def functor2():
    plus = pydash.curry(lambda a, b: a + b)
    plus3 = plus(3)
    two = Wrapper(2)
    five = two.fmap(plus3)
    five.map(print)
    
    plus10 = plus(10)
    fifteen = two.fmap(plus3).fmap(plus10)
    fifteen.map(print)
    
functor = [
    functor1,
    functor2
]