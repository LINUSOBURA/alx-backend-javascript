import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classArray = [19, 20, 34];
  return classArray.map((size) => new ClassRoom(size));
}
