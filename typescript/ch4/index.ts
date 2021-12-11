import main from '../main';
import { currying } from './currying';
import { compose1, compose2, compose3 } from './compose';
import { partial } from './partial';

main([
  currying,
  compose1,
  compose2,
  compose3,
  partial
]);