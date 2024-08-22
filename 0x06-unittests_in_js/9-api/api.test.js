const { expect } = require("chai");
const http = require("http");
const app = require("./api"); // Import the actual app instance

let server; // Define a variable to hold the server instance

before(function (done) {
  // Start the server before running tests
  server = app.listen(7865, () => {
    console.log("Test server started on localhost port 7865");
    done();
  });
});

after(function (done) {
  // Cleanup after the tests by closing the server
  if (server) {
    server.close(done);
  } else {
    done();
  }
});

describe("Index page", function () {
  it("should return status code 200", function (done) {
    http.get("http://localhost:7865/", (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message", function (done) {
    http.get("http://localhost:7865/", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(data).to.equal("Welcome to the payment system");
        done();
      });
    });
  });
});

describe("Cart page", function () {
  it("should return status code 200 when id is a number", function (done) {
    http.get("http://localhost:7865/cart/123", (res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct message when id is a number", function (done) {
    http.get("http://localhost:7865/cart/123", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(data).to.equal("Payment methods for cart 123");
        done();
      });
    });
  });

  it("should return status code 404 when id is not a number", function (done) {
    http.get("http://localhost:7865/cart/abc", (res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it("should return the correct message when id is not a number", function (done) {
    http.get("http://localhost:7865/cart/abc", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(data).to.equal("Cart not found");
        done();
      });
    });
  });
});
