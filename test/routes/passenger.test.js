const adminRequest = require("supertest");
const { generateToken } = require("../../src/utils/generateToken");

describe("/passenger", () => {
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
        .post("/passenger/" + str)
        .set({
          "x-auth-token": generateToken({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          }),
        })
        .send({
          name,
          phoneNumber,
        });
    };

    it("should add a new passenger", async () => {
      name = "New passenger";
      phoneNumber = "0722000020";
      const res = await exec();

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });

    it("should suspend passenger", async () => {
      const res = await exec("/1/suspend");

      expect(res.status).toBe(204);
    });
  });

  describe("GET /", () => {
    const exec = async (str) => {
      return await adminRequest(server)
        .get("/passenger/" + str)
        .set({
          "x-auth-token": generateToken({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          }),
        });
    };

    it("should retrieve a  passenger", async () => {
      const res = await exec("/1");

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });

    it("should retrieve all passengers", async () => {
      const res = await exec();

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });
  });
});
