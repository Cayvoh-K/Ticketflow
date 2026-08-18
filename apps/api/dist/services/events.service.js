"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseTicket = exports.deleteEvent = exports.updateEvent = exports.createEvent = exports.getEventById = exports.getAllEvents = void 0;
const prisma_1 = require("../config/prisma");
const getAllEvents = async () => {
    return prisma_1.prisma.event.findMany({
        orderBy: {
            date: "asc",
        },
    });
};
exports.getAllEvents = getAllEvents;
const getEventById = async (id) => {
    return prisma_1.prisma.event.findUnique({
        where: {
            id,
        },
    });
};
exports.getEventById = getEventById;
const createEvent = async (data) => {
    return prisma_1.prisma.event.create({
        data,
    });
};
exports.createEvent = createEvent;
const updateEvent = async (id, data) => {
    return prisma_1.prisma.event.update({
        where: {
            id,
        },
        data,
    });
};
exports.updateEvent = updateEvent;
const deleteEvent = async (id) => {
    return prisma_1.prisma.event.delete({
        where: {
            id,
        },
    });
};
exports.deleteEvent = deleteEvent;
const purchaseTicket = async (id) => {
    const event = await prisma_1.prisma.event.findUnique({
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
    return prisma_1.prisma.event.update({
        where: {
            id,
        },
        data: {
            availableTickets: event.availableTickets - 1,
        },
    });
};
exports.purchaseTicket = purchaseTicket;
//# sourceMappingURL=events.service.js.map