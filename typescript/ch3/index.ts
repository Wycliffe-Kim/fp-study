import main from '../main';
import filter from './filter';
import map from './map';
import reduce from './reduce';
import sort from './sort';
import treeTraversal from './treeTraversal';

main([
  ...map,
  ...reduce,
  ...filter,
  ...sort,
  treeTraversal
]);