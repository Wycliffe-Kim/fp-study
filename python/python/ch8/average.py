import toolz as tz
import pydash
import math

from ..ch6.compute_average_grade import fork

def average(arr):
    return tz.compose(
        math.ceil,
        fork(pydash.divide, pydash.sum_, len)
    )(arr)