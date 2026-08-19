"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controllers_1 = require("../controllers/orders.controllers");
const router = (0, express_1.Router)();
router.post("/", orders_controllers_1.createNewOrder);
exports.default = router;
//# sourceMappingURL=orders.routes.js.map