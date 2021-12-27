from ..main import main
from .callback_hell import callback_hell
from .promise import promise
from .lazy_create_data import lazy_create_data
from .recursive_generator import recursive_generator
from .reactive_programming import reactive_programming

index = lambda: main([
        callback_hell,
        promise,
        *lazy_create_data,
        *recursive_generator,
        *reactive_programming
    ])