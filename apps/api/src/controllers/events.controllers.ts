import { Request, Response } from "express";
import { getAllEvents } from "../services/events.service";

export const getEvents = (_req: Request, res:Response) => {
    const events = getAllEvents();

    res.status(200).json(events);
};