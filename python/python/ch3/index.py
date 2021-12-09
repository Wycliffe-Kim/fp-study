from ..main import main
from .filter import filter_ip, filter_fp
from .reduce import reduce_ip, reduce_fp
from .map import map_ip, map_fp
from .sort import sort_ip, sort_fp
from .tree_traversal import tree_traversal_fp

index = lambda: main([
        filter_ip,
        filter_fp,
        reduce_ip,
        reduce_fp,
        map_ip,
        map_fp,
        sort_ip,
        sort_fp,
        tree_traversal_fp
    ])