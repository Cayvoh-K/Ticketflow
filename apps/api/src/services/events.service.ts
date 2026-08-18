import { prisma } from "../config/prisma";

export const getAllEvents = async () => {
  return prisma.event.findMany({
    orderBy: {
      date: "asc",
    },
  });
};

export const getEventById = async (id: string) => {
  return prisma.event.findUnique({
    where: {
      id,
    },
  });
};

export const createEvent = async (data: {
  title: string;
  description: string;
  location: string;
  date: Date;
  totalTickets: number;
  availableTickets: number;
}) => {
  return prisma.event.create({
    data,
  });
};

export const updateEvent = async (
  id: string,
  data: Partial<{
    title: string;
    decsription:string;
    location: string;
    date: Date;
    totalTickets: number;
    availableTickets: number;
  }>
) => {
  return prisma.event.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteEvent = async (id: string) => {
  return prisma.event.delete({
    where: {
      id,
    },
  });
};

export const purchaseTicket = async (id: string) => {
  const event = await prisma.event.findUnique({
    where: {
      id,
    },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  if (event.availableTickets <= 0) {
    throw new Error("Tickets are sold out");
  }

  return prisma.event.update({
    where: {
      id,
    },
    data: {
      availableTickets: event.availableTickets - 1,
    },
  });
};