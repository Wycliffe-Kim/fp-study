const main = require('../main');
const callbackHell = require('./callbackHell');
const continuationPassingStyle = require('./continuationPassingStyle');
const promise = require('./promise');
const lazyCreateData = require('./lazyCreateData');

main([
  callbackHell,
  continuationPassingStyle,
  promise,
  ...lazyCreateData,
]);