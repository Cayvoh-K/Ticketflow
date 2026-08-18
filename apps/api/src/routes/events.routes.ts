import { Router } from "express";

import {
  createNewEvent,
  getEvent,
  getEvents,
  purchaseEventTicket,
  removeEvent,
  updateExistingEvent,
} from "../controllers/events.controllers";

const router = Router();

router.get("/", getEvents);

router.get("/:id", getEvent);

router.post("/", createNewEvent);

router.post("/:id/purchase", purchaseEventTicket);

router.put("/:id", updateExistingEvent);

router.delete("/:id", removeEvent);

export default router;