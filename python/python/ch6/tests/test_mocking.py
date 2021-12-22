import unittest
import unittest.mock
import json
# 아래 부분은 속성 기반 테스트(Property Based Test)를 진행할 때 필요하다.
# 모킹을 하더라도 속성 기반 테스트를 함께 할 수 있다.
# 그러나 이때는 아래와 같이 unittest.mock.patch를 데코레이터가 아니라 Context Manager로 사용해야 한다.
# from hypothesis import settings, given, strategies as st 
from python.ch6.TestDB import TestDB

class MockingTest(unittest.TestCase):
    # @settings(max_examples=100)
    # @given(st.integers())
    def test(self
            #  , integer
             ):
        with unittest.mock.patch('requests.get') as mock_requests:
            response = mock_requests.return_value
            response.status_code = 200
            response.json.return_value = {
              'a': 'testA',
              'b': 'testB',
              'c': 'testC'
            }
            db = TestDB()
            data = db.get()
            # print(integer)
            self.assertEqual(json.dumps(data), '{"a": "testA", "b": "testB", "c": "testC"}')
            