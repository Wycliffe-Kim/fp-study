class Address {
  constructor(country) {
    this._country = country;
  }

  get country() {
    return this._country;
  }

  set country(country) {
    this._country = country;
  }
}

module.exports = {
  Address
};