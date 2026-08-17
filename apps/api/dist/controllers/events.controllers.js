"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEvent = exports.updateExistingEvent = exports.createNewEvent = exports.getEvent = exports.getEvents = void 0;
const events_service_1 = require("../services/events.service");
const getEvents = async (_req, res) => {
    const events = await (0, events_service_1.getAllEvents)();
    res.status(200).json(events);
};
exports.getEvents = getEvents;
const getEvent = async (req, res) => {
    const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;
    const event = await (0, events_service_1.getEventById)(id);
    if (!event) {
        res.status(404).json({
            message: "Event not found",
        });
        return;
    }
    res.status(200).json(event);
};
exports.getEvent = getEvent;
const createNewEvent = async (req, res) => {
    const event = await (0, events_service_1.createEvent)({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        date: new Date(req.body.date),
        totalTickets: req.body.totalTickets,
        availableTickets: req.body.availableTickets,
    });
    res.status(201).json(event);
};
exports.createNewEvent = createNewEvent;
const updateExistingEvent = async (req, res) => {
    const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;
    const event = await (0, events_service_1.updateEvent)(id, req.body);
    res.status(200).json(event);
};
exports.updateExistingEvent = updateExistingEvent;
const removeEvent = async (req, res) => {
    const id = Array.isArray(req.params.id)
        ? req.params.id[0]
        : req.params.id;
    await (0, events_service_1.deleteEvent)(id);
    res.status(204).send();
};
exports.removeEvent = removeEvent;
//# sourceMappingURL=events.controllers.js.map