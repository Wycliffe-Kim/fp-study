const _ = require('lodash');

function partial() {
  String.prototype.first = _.partial(String.prototype.substring, 0);
  console.log('Functional Programming'.first(3));
}

module.exports = {
  partial
};