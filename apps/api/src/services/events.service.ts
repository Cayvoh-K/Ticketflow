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