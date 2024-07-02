export default function createInt8TypedArray(length, position, value) {
  const newBuffer = new ArrayBuffer(length);
  const int8View = new DataView(newBuffer, 0, length);

  if (position >= length) {
    throw Error('Position outside rnge');
  }
  int8View.setInt8(position, value);

  return int8View;
}
