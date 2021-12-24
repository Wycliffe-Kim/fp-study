import main from '../main';
import currying from './currying';
import compose from './compose';
import partial from './partial';
import impureAndPure from './impureAndPure';

main([
  currying,
  ...compose,
  partial,
  impureAndPure
]);