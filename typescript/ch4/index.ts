import main from '../main';
import { currying } from './currying';
import { compose1, compose2, compose3 } from './compose';
import { partial } from './partial';
import { impureAndPure } from './impureAndPure';

main([
  currying,
  compose1,
  compose2,
  compose3,
  partial,
  impureAndPure
]);