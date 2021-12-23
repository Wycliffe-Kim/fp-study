import pydash
import toolz as tz
from .PerformanceChecker import CheckerTimeType, log_checker, map_between_checker, start_checker, stop_checker

check_performance = lambda name, func: tz.compose(
    log_checker(CheckerTimeType.ms),
    stop_checker,
    map_between_checker(func),
    start_checker(False, 0)
)(name)