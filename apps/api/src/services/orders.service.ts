import { prisma } from "../config/prisma";

export const createOrder = async (
  name: string,
  email: string,
  eventId: string
) => {
  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  if (event.availableTickets <= 0) {
    throw new Error("Tickets are sold out");
  }

  const user = await prisma.user.upsert({
    where: {
      email,
    },
    update: {},
    create: {
      name,
      email,
    },
  });

  await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      availableTickets: {
        decrement: 1,
      },
    },
  });

  return prisma.order.create({
    data: {
      userId: user.id,
      eventId,
    },
  });
};