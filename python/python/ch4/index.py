from ..main import main
from .currying import currying
from .compose import compose
from .partial import partial

index = lambda: main([
        currying,
        compose,
        partial
    ])