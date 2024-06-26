export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const res = true;
    if (res) {
      resolve('success');
    } else {
      reject(Error('error'));
    }
  });
}
