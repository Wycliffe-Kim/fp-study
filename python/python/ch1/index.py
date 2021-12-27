from .show_student import show_student
from .power import power
from .average import average
from ..main import main

index = lambda: main([
        *power,
        *show_student,
        *average
    ])