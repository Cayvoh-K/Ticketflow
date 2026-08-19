import { Request, Response } from "express";

import { createOrder } from "../services/orders.service";

export const createNewOrder = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, eventId } = req.body;

        const order = await createOrder(
            name,
            email,
            eventId
        );

        res.status(201).json(order);
    } catch (error) {
        const message =
        error instanceof Error
        ? error.message
        : "Unable to create order";

        res.status(400).json({
            message,
        });
    }
    };