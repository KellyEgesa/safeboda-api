const { prisma } = require("../../prisma/index");

module.exports = {
  async getDrivers() {
    return await prisma.driver.findMany();
  },

  async getDriver(driverId) {
    return await prisma.driver.findFirst({ where: { id: driverId } });
  },

  async createDriver(driverBody) {
    return await prisma.driver.create({
      data: {
        name: driverBody.name,
        phoneNumber: driverBody.phoneNumber,
      },
    });
  },

  async suspendDriver(driverId, boolean) {
    return await prisma.driver.update({
      where: {
        id: driverId,
      },
      data: {
        suspended: boolean,
      },
    });
  },
};
