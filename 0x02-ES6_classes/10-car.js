export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.clones]() {
    return this;
  }

  cloneCar() {
    const Clones = this.constructor[Symbol.clones];

    return new Clones();
  }
}
