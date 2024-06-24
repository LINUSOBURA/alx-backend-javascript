export default function getNeighborhoodsList() {
  let sanFranciscoNeighborhoods = ["SOMA", "Union Square"];

  const addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };

  return {
    addNeighborhood,
    sanFranciscoNeighborhoods,
  };
}
