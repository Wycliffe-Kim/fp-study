class Either {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

module.exports = {
  Either
};