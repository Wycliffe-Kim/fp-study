type MonadWrapperFunc = (value: any) => any;

interface MonadWrapperReturn {
  map(f: MonadWrapperFunc): any;
  join(): MonadWrapperReturn;
  get(): any;
  toString(): string;
}

function MonadWrapper(value: any): MonadWrapperReturn {
  let _value = value;

  return {
    map(f: MonadWrapperFunc) {
      return f(_value);
    },

    join() {
      if (!(_value instanceof MonadWrapperReturn)) {

      }
      
      return (_value as MonadWrapperReturn).join();
    },

    get() {
      return _value;
    },

    toString() {
      return `Wrapper(${_value})`;
    }
  }
}

export {
  WrapperReturn,
  Wrapper
};