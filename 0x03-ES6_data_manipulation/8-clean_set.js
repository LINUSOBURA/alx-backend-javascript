export default function cleanSet(set, startString) {
  const result = [];

  if (!startString) { return ''; }
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      const substring = item.slice(startString.length);
      result.push(substring);
    }
  });

  return result.join('-');
}
