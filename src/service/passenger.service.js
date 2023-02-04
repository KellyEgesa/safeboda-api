const { prisma } = require("../../prisma/index");

module.exports = {
  async getPassengers() {
    return await prisma.passenger.findMany();
  },

  async getPassenger(passengerId) {
    return await prisma.passenger.findFirst({ where: { id: passengerId } });
  },

  async createPassenger(passengerBody) {
    return await prisma.passenger.create({
      data: {
        name: passengerBody.name,
        phoneNumber: passengerBody.phoneNumber,
      },
    });
  },
};
