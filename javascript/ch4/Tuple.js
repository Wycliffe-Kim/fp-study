const Immutable = require('immutable');

const Tuple = (...args) => {
  let _args = Immutable.List(args);
  
  return {
    values() {
      return _args.toArray();
    }
  };
}

module.exports = {
  Tuple
};