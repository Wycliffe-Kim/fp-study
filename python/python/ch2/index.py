from .find_students_by import find_students_by
from ..main import main

index = lambda: main([
        *find_students_by,
    ])