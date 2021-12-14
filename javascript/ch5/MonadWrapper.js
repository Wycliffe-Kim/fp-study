class MonadWrapper {
  static of(value) {
    return new MonadWrapper(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(f) {
    return MonadWrapper.of(f(this._value));
  }

  join() {
    if (!(this._value instanceof MonadWrapper)) {
      return this;
    }

    return this._value.join();
  }

  get() {
    return this._value;
  }

  toString() {
    return `Wrapper(${this._value})`;
  }
}

module.exports = {
  MonadWrapper
};