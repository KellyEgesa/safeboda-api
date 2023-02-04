const { prisma } = require("../../prisma/index");

module.exports = {
  async createRide(ride) {
    const passengerHasRide = await prisma.ride.findFirst({
      where: {
        passengerId: ride.passengerId,
        completed: false,
      },
    });

    const driverHasRide = await prisma.ride.findFirst({
      where: {
        driverId: ride.driverId,
        completed: false,
      },
    });

    if (passengerHasRide) {
      return customError("passenger has ongoing ride", 400);
    }

    if (driverHasRide) {
      return customError("driver has ongoing ride", 400);
    }

    return await prisma.ride.create({
      data: {
        passengerId: ride.passengerId,
        driverId: ride.driverId,
        pickUpPoint: ride.pickUpPoint,
        destPoint: ride.destPoint,
      },
    });
  },

  async stopRide(rideId) {
    return await prisma.ride.update({
      where: {
        id: rideId,
      },
      data: {
        completed: true,
      },
    });
  },

  async getRide(rideId) {
    return await prisma.ride.findFirst({
      where: {
        id: rideId,
      },
    });
  },

  async getOngoingRides() {
    return await prisma.ride.findMany({
      where: {
        completed: false,
      },
    });
  },
};
