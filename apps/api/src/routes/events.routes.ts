import { Router } from "express";
import { getEvents } from "../controllers/events.controllers";

const router = Router();

router.get("/", getEvents);

router.get("/", (_req, res) => {
    res.json([
        {
            id: "1",
            title: "DevOps Summit 2026",
            location: "Nairobi",
            date: "2026-10-12",
            availableTickets: 500,
        },
        {
            id: "2",
            title: "Cloud Native Kenya",
            location: "Mombasa",
            date: "2026-11-05",
            availableTickets: 200,
        },
    ]);
});

export default router;