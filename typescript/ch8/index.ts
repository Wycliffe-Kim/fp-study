import main from '../main';
import { callbackHell } from './callbackHell';
import { continuationPassingStyle } from './continuationPassingStyle';
import { lazyCreateData1, lazyCreateData2, lazyCreateData3 } from './lazyCreateData';
import { promise } from './promise';
import { recursiveGenerator1, recursiveGenerator2 } from './recursiveGenerator';

main([
  callbackHell,
  continuationPassingStyle,
  promise,
  lazyCreateData1,
  lazyCreateData2,
  lazyCreateData3,
  recursiveGenerator1,
  recursiveGenerator2
]);
