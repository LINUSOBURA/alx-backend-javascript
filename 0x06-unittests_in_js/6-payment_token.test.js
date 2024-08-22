const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token.js");

describe("getPaymentTokenFromAPI", function () {
  it('should return a promise that resolves with {data: "Successful response from the API"} when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: "Successful response from the API",
        });
        done(); // Indicate the test is done
      })
      .catch((error) => done(error)); // Catch any unexpected errors and pass them to done
  });
});
