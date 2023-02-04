const adminRequest = require("supertest");
const { generateToken } = require("../../src/utils/generateToken");

describe("/ride", () => {
  let server;
  beforeEach(() => {
    server = require("../../app");
  });

  afterEach(async () => {
    await server.close();
  });

  describe("POST /", () => {
    let name;
    let phoneNumber;
    const exec = async (str) => {
      return await adminRequest(server)
        .post("/ride/" + str)
        .set({
          "x-auth-token": generateToken({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          }),
        })
        .send({
          passengerId: 5,
          driverId: 40,
          pickUpPoint: "00000",
          destPoint: "11111",
        });
    };

    it("should add a new ride", async () => {
      const res = await exec("/1/1");

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });

    it("should stop a  ride", async () => {
      const res = await exec("stop/1");

      expect(res.status).toBe(204);
    });
  });

  describe("GET /", () => {
    const exec = async (str) => {
      return await adminRequest(server)
        .get("/ride/" + str)
        .set({
          "x-auth-token": generateToken({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          }),
        });
    };

    it("should retrieve a  ride", async () => {
      const res = await exec("/1");

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });

    it("should retrieve all rides", async () => {
      const res = await exec();

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });
  });
});
