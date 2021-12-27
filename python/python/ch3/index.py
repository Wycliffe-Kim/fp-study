from ..main import main
from .filter import filter
from .reduce import reduce
from .map import map
from .sort import sort
from .tree_traversal import tree_traversal

index = lambda: main([
        *filter,
        *reduce,
        *map,
        *sort,
        tree_traversal
    ])