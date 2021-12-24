const main = require('../main');
const callbackHell = require('./callbackHell');
const continuationPassingStyle = require('./continuationPassingStyle');
const promise = require('./promise');

main([
  callbackHell,
  continuationPassingStyle,
  promise
]);