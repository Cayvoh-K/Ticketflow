"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const events_controllers_1 = require("../controllers/events.controllers");
const router = (0, express_1.Router)();
router.get("/", events_controllers_1.getEvents);
router.get("/:id", events_controllers_1.getEvent);
router.post("/", events_controllers_1.createNewEvent);
router.put("/:id", events_controllers_1.updateExistingEvent);
router.delete("/:id", events_controllers_1.removeEvent);
exports.default = router;
//# sourceMappingURL=events.routes.js.map