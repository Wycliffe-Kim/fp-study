class Either {
  protected _value: any;

  constructor(value: any) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

export {
  Either
};