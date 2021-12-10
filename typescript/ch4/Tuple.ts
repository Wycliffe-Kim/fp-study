import Immutable from 'immutable';

const Tuple = (...args: any) => {
  let _args = Immutable.List(args);
  
  return {
    values() {
      return _args.toArray();
    }
  };
}

export {
  Tuple
};