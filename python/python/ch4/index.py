from ..main import main
from .currying import currying
from .compose import compose
from .partial import partial
from .impure_and_pure import impure_and_pure

index = lambda: main([
        currying,
        *compose,
        partial,
        impure_and_pure
    ])