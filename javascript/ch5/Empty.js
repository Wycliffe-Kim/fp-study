function Empty() {
  return {
    map(val) {
      return this;
    },

    fmap(val) {
      return Empty();
    },

    toString() {
      return 'Empty()';
    }
  };
}

module.exports = {
  Empty
};