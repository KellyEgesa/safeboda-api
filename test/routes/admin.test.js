const adminRequest = require("supertest");

describe("/admin", () => {
  let server;
  beforeEach(() => {
    server = require("../../app");
  });

  afterEach(async () => {
    await server.close();
  });

  describe("POST /", () => {
    let email;
    let password;
    const exec = async () => {
      return await adminRequest(server).post("/admin/login").send({
        email,
        password,
      });
    };

    it("should authenticate user and return headers", async () => {
      email = process.env.ADMIN_EMAIL;
      password = process.env.ADMIN_PASSWORD;
      const res = await exec();
      expect(res.status).toBe(200);
      expect(res.body).not.toBeNull();
    });
  });
});
