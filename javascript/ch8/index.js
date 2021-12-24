const main = require('../main');
const callbackHell = require('./callbackHell');
const continuationPassingStyle = require('./continuationPassingStyle');

main([
  callbackHell,
  continuationPassingStyle
]);