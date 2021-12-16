const fp = require('lodash/fp');
const { MaybeFactory } = require('./MaybeFactory');

const lift = fp.curry((f, value) => MaybeFactory.fromNullable(value).map(f));
module.exports = { lift };