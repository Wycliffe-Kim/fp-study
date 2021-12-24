import main from '../main';
import { callbackHell } from './callbackHell';
import { continuationPassingStyle } from './continuationPassingStyle';
import { lazyCreateData1, lazyCreateData2, lazyCreateData3 } from './lazyCreateData';
import { promise } from './promise';

main([
  callbackHell,
  continuationPassingStyle,
  promise,
  lazyCreateData1,
  lazyCreateData2,
  lazyCreateData3
]);
