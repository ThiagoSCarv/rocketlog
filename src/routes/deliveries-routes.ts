import { Router } from "express";
import { DeliveriesControllers } from "@/controllers/deliveries-controllers";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const deliveriesRoutes = Router();
const deliveriesControllers = new DeliveriesControllers();

deliveriesRoutes.use(ensureAuthenticated)

deliveriesRoutes.post("/", deliveriesControllers.create);

export { deliveriesRoutes };
