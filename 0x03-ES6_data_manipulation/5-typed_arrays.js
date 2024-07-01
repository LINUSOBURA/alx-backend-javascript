export default function createInt8TypedArray(length, position, value) {
  const newBuffer = new ArrayBuffer(length);
  const int8View = new Int8Array(newBuffer);
  try {
    int8View[position] = value;
  } catch (error) {
    console.error('Position outside range');
  }

  return int8View;
}
