import main from '../main';
import { filter_fp, filter_oop } from './filter';
import { findStudentsBy_fp, findStudentsBy_oop } from './findStudentsBy';
import { map_fp, map_oop } from './map';
import { reduce_fp, reduce_oop } from './reduce';

main([
  findStudentsBy_oop,
  findStudentsBy_fp,
  map_oop,
  map_fp,
  reduce_oop,
  reduce_fp,
  filter_oop,
  filter_fp
]);