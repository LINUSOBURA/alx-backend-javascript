export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = val;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._code = val;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
