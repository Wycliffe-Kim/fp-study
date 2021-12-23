import main from '../main';
import { callbackHell } from './callbackHell';
import { continuationPassingStyle } from './continuationPassingStyle';
import { promise } from './promise';

main([
  callbackHell,
  continuationPassingStyle,
  promise
]);
