function Wrapper(value) {
  const _value = value;

  return {
    map(f) {
      return f(_value);
    },

    fmap(f) {
      return Wrapper(f(_value));
    },

    toString() {
      return `Wrapper(${_value})`;
    }
  };
}

module.exports = {
  Wrapper
};