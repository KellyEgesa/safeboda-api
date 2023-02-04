const adminRequest = require("supertest");
const { generateToken } = require("../../src/utils/generateToken");

describe("/driver", () => {
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
        .post("/driver/" + str)
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

    it("should add a new driver", async () => {
      name = "New Driver";
      phoneNumber = "0722000020";
      const res = await exec();

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });

    it("should suspend driver", async () => {
      const res = await exec("/1/suspend");

      expect(res.status).toBe(204);
    });
  });

  describe("GET /", () => {
    const exec = async (str) => {
      return await adminRequest(server)
        .get("/driver/" + str)
        .set({
          "x-auth-token": generateToken({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          }),
        });
    };

    it("should retrieve a  driver", async () => {
      const res = await exec("/1");

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });

    it("should retrieve all drivers", async () => {
      const res = await exec();

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });
  });

  describe("DELETE /", () => {
    const exec = async (str) => {
      return await adminRequest(server)
        .delete("/driver/" + str + "suspend")
        .set({
          "x-auth-token": generateToken({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD,
          }),
        });
    };

    it("should suspend a  driver", async () => {
      const res = await exec("/1");

      expect(res.status).toBe(201);
      expect(res.body).not.toBeNull();
    });
  });
});
