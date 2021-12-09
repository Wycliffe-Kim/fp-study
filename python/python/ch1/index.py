from .show_student import show_student_fp, show_student_ip
from .power import power_ip, power_fp
from .average import average_ip, average_fp, average_grade_ip, average_grade_fp
from ..main import main

index = lambda: main([
        power_ip,
        power_fp,
        show_student_ip,
        show_student_fp,
        average_ip,
        average_fp,
        average_grade_ip,
        average_grade_fp
    ])