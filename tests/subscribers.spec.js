const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");

const Subscriber = require("../models/subscriber");

describe("Pruebas sobre la API de subscribers", () => {
  // Antes de todas las pruebas
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost/prueba");
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /subscribers", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/subscribers").send();
    });

    it("Ruta operativa", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("Petición devuelve array de subscribers", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
