"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewOrder = void 0;
const orders_service_1 = require("../services/orders.service");
const createNewOrder = async (req, res) => {
    try {
        const { name, email, eventId } = req.body;
        const order = await (0, orders_service_1.createOrder)(name, email, eventId);
        res.status(201).json(order);
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to create order";
        res.status(400).json({
            message,
        });
    }
};
exports.createNewOrder = createNewOrder;
//# sourceMappingURL=orders.controllers.js.map