from ..main import main
from .currying import currying
from .compose import compose

index = lambda: main([
        currying,
        compose
    ])