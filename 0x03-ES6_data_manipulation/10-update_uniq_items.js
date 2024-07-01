export default function updateUniqItems(map) {
  try {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  } catch (error) {
    console.error('Cannot process');
  }
}
