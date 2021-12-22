import pydash
import unittest

from hypothesis import settings, given, strategies as st
from python.ch6.compute_average_grade import compute_average_grade, fork, to_letter_grade

class ComputeAverageGradeTest(unittest.TestCase):
    def test_based_example(self):
        self.assertEqual(compute_average_grade([80, 90, 100]), 'A')
        
    @settings(max_examples=100)
    @given(st.lists(st.integers(90, 100), min_size=1))
    def test_based_property(self, arr):
        data_list = list(arr)
        self.assertEqual(compute_average_grade(data_list), 'A')
        
class ToLetterGradeTest(unittest.TestCase):
    def test(self):
        self.assertEqual(to_letter_grade(90), 'A')
        self.assertEqual(to_letter_grade(80), 'B')
        self.assertEqual(to_letter_grade(70), 'C')
        self.assertEqual(to_letter_grade(60), 'D')
        self.assertEqual(to_letter_grade(50), 'F')
        
class ForkTest(unittest.TestCase):
    def test(self):
        def times_two(value):
            func = fork(lambda x, y: x + y, pydash.identity, pydash.identity)
            return func(value)
        self.assertEqual(times_two(1), 2)
        self.assertEqual(times_two(2), 4)