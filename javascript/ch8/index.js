const main = require('../main');
const callbackHell = require('./callbackHell');
const continuationPassingStyle = require('./continuationPassingStyle');
const promise = require('./promise');
const lazyCreateData = require('./lazyCreateData');
const recursiveGenerator = require('./recursiveGenerator');
const iterate = require('./iterate');
const reactiveProgramming = require('./reactiveProgramming');

main([
  callbackHell,
  continuationPassingStyle,
  promise,
  ...lazyCreateData,
  ...recursiveGenerator,
  ...iterate,
  ...reactiveProgramming
]);