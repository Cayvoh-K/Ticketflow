"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const prisma_1 = require("../config/prisma");
const createOrder = async (name, email, eventId) => {
    const event = await prisma_1.prisma.event.findUnique({
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
    const user = await prisma_1.prisma.user.upsert({
        where: {
            email,
        },
        update: {},
        create: {
            name,
            email,
        },
    });
    await prisma_1.prisma.event.update({
        where: {
            id: eventId,
        },
        data: {
            availableTickets: {
                decrement: 1,
            },
        },
    });
    return prisma_1.prisma.order.create({
        data: {
            userId: user.id,
            eventId,
        },
    });
};
exports.createOrder = createOrder;
//# sourceMappingURL=orders.service.js.map