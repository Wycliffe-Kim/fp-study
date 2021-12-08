import main from '../main';
import { findStudentsBy_fp, findStudentsBy_oop } from './findStudentsBy';
import { map_fp, map_oop } from './map';

main([
  findStudentsBy_oop,
  findStudentsBy_fp,
  map_oop,
  map_fp
]);