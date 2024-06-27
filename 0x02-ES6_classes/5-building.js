export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = val;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage must be implemented in subclass');
  }
}
