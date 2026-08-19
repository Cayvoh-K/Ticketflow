"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const events_routes_1 = __importDefault(require("./routes/events.routes"));
const orders_routes_1 = __importDefault(require("./routes/orders.routes"));
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/api/events", events_routes_1.default);
app.use("/api/orders", orders_routes_1.default);
// Health Check
app.get("/health", (_req, res) => {
    res.status(200).json({
        status: "healthy",
        service: "ticketflow-api",
        timestamp: new Date().toISOString(),
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map