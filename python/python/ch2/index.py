from .find_students_by import find_students_by_ip, find_students_by_fp
from ..main import main

index = lambda: main([
        find_students_by_ip,
        find_students_by_fp
    ])