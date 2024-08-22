const { expect } = require("chai");
const http = require("http");
const app = "./api.js";

describe("Index page", function () {
  // Cleanup after the tests by closing the server
  after(function () {
    server.close();
  });

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
