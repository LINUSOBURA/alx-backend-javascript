function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: "Successful response from the API" });
  }
  // If success is false, do nothing (function will return undefined)
}

module.exports = getPaymentTokenFromAPI;
