from ..main import main
from .callback_hell import callback_hell
from .promise import promise
from .lazy_create_data import lazy_create_data

index = lambda: main([
        callback_hell,
        promise,
        *lazy_create_data
    ])