from ..main import main
from .currying import currying
from .compose import compose1, compose2, compose3
from .partial import partial
from .impure_and_pure import impure_and_pure

index = lambda: main([
        currying,
        compose1,
        compose2,
        compose3,
        partial,
        impure_and_pure
    ])