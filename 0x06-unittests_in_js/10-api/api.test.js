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

  // Test suite for /available_payments endpoint
  describe("GET /available_payments", () => {
    it("should return status code 200", (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        const response = JSON.parse(body);
        expect(response).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  // Test suite for /login endpoint
  describe("POST /login", () => {
    it("should return welcome message with username", (done) => {
      request.post(
        {
          url: `${API_URL}/login`,
          json: { userName: "JohnDoe" },
        },
        (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal("Welcome JohnDoe");
          done();
        }
      );
    });

    it("should return status code 400 when username is missing", (done) => {
      request.post(
        {
          url: `${API_URL}/login`,
          json: {},
        },
        (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        }
      );
    });
  });
});
