import Immutable from 'immutable';

const Tuple = (...args: any) => {
  const _args = Immutable.List(args);

  return {
    values() {
      return _args.toArray();
    }
  };
};

export {
  Tuple
};