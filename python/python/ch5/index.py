from ..main import main
from .functor import functor1, functor2
from .monad import monad_compose, monad1, monad2, monad_chain, monad_either, monad_io, monad_lift, monad_maybe

index = lambda: main([
        functor1,
        functor2,
        monad1,
        monad2,
        monad_maybe,
        monad_lift,
        monad_either,
        monad_io,
        monad_chain,
        monad_compose
    ])