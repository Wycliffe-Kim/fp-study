import main from '../main';
import { filter_fp, filter_ip } from './filter';
import { map_fp, map_ip } from './map';
import { reduce_fp, reduce_ip } from './reduce';
import { sort_fp, sort_ip } from './sort';
import { treeTraversal_fp } from './treeTraversal';

main([
  map_ip,
  map_fp,
  reduce_ip,
  reduce_fp,
  filter_ip,
  filter_fp,
  sort_ip,
  sort_fp,
  treeTraversal_fp
]);