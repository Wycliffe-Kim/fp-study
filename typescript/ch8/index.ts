import main from '../main';
import callbackHell from './callbackHell';
import continuationPassingStyle from './continuationPassingStyle';
import lazyCreateData from './lazyCreateData';
import promise from './promise';
import recursiveGenerator from './recursiveGenerator';
import iterate from './iterate';
import reactiveProgramming from './reactiveProgramming';

main([
  callbackHell,
  continuationPassingStyle,
  promise,
  ...lazyCreateData,
  ...recursiveGenerator,
  ...iterate,
  ...reactiveProgramming
]);
