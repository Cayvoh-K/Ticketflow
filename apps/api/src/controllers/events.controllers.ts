import { Request, Response } from "express";

import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from "../services/events.service";

export const getEvents = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const events = await getAllEvents();

  res.status(200).json(events);
};

export const getEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const event = await getEventById(id);

  if (!event) {
    res.status(404).json({
      message: "Event not found",
    });

    return;
  }

  res.status(200).json(event);
};

export const createNewEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const event = await createEvent({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: new Date(req.body.date),
    totalTickets: req.body.totalTickets,
    availableTickets: req.body.availableTickets,
  });

  res.status(201).json(event);
};

export const updateExistingEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const event = await updateEvent(id, req.body);

  res.status(200).json(event);
};

export const removeEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  await deleteEvent(id);

  res.status(204).send();
};