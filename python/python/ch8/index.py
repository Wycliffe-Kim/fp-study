from ..main import main
from .callback_hell import callback_hell
from .promise import promise

index = lambda: main([
    callback_hell,
    promise
    ])