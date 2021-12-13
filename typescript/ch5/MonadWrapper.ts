type MonadWrapperFunc = (value: any) => any;

interface MonadWrapperReturn {
  map(f: MonadWrapperFunc): any;
  join(): MonadWrapperReturn;
  get(): any;
  toString(): string;
}

function MonadWrapper(value: any): MonadWrapperReturn {
  let _value = value;

  function instanceOfMonadWrapperReturn(obj: any): obj is MonadWrapperReturn {
    console.log(obj instanceof MonadWrapper);
    return obj instanceof MonadWrapper
    return (
      ('map' in obj) &&
      ('join' in obj) &&
      ('get' in obj) &&
      ('toString' in obj)
    );
  }

  return {
    map(f: MonadWrapperFunc) {
      return MonadWrapperOf(f(_value));
    },

    join() {
      if (!(instanceOfMonadWrapperReturn(_value))) {
        return this;
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

const MonadWrapperOf = (_value: any) => MonadWrapper(_value);

export {
  MonadWrapperReturn,
  MonadWrapper,
  MonadWrapperOf
};