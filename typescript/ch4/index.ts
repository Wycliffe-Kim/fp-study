import main from '../main';
import { currying } from './currying';
import { compose } from './compose';
import { partial } from './partial';

main([
  currying,
  compose,
  partial
]);