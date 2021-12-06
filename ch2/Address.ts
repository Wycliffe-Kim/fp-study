class Address {
  _country: string;

  constructor(country: string) {
    this._country = country;
  }

  get country() {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
  }
}

export {
  Address
}