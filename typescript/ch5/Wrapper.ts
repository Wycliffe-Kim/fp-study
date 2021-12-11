function Wrapper(value: any) {
  type WrapperFunc = (value: any) => any;

  let _value = value;

  return {
    map(f: WrapperFunc) {
      return f(_value);
    },

    fmap(f: WrapperFunc) {
      return Wrapper(f(_value));
    },

    toString() {
      return `Wrapper(${_value})`;
    }
  }
}

export {
  Wrapper
};