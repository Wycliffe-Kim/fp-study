function Empty() {
  return {
    map(val: any) {
      return this;
    },

    fmap(val: any) {
      return Empty();
    },

    toString() {
      return 'Empty()';
    }
  };
}

export {
  Empty
};