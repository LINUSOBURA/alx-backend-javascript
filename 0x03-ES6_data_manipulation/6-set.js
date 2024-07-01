export default function setFromArray(arr) {
  const set = new Set();
  arr.map((item) => set.add(item));
  return set;
}
