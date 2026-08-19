import { Router } from "express";
import { createNewOrder } from "../controllers/orders.controllers";

const router = Router();

router.post("/", createNewOrder);

export default router;