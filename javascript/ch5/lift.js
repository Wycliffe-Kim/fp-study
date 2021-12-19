const fp = require('lodash/fp');
const { Maybe } = require('./Maybe');

const lift = fp.curry((f, value) => Maybe.fromNullable(value).map(f));
module.exports = { lift };