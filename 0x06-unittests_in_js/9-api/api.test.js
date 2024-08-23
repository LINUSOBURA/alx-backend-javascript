const request = require("request");
const { expect } = require("chai");
const express = require("express");
const app = require("./api"); // Import the app from api.js

let server;
const PORT = 7865;
const API_URL = `http://localhost:${PORT}`;

before((done) => {
  server = app.listen(PORT, () => {
    console.log(`Test server started on localhost port ${PORT}`);
    done();
  });
});

after((done) => {
  if (server) {
    server.close(done);
  } else {
    done();
  }
});

describe("API integration test", () => {
  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("GET /cart/:id returns correct response for valid :id", (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 47");
      done();
    });
  });

  it("GET /cart/:id returns 404 response for negative number values in :id", (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it("GET /cart/:id returns 404 response for non-numeric values in :id", (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
