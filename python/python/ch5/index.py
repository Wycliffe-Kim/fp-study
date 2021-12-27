from ..main import main
from .functor import functor
from .monad import monad

index = lambda: main([
        *functor,
        *monad
    ])