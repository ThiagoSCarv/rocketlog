import { Router } from "express";
import { DeliveriesControllers } from "@/controllers/deliveries-controllers";
import { DeliveriesStatusControllers } from "@/controllers/deliveries-status-controllers";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const deliveriesRoutes = Router();
const deliveriesControllers = new DeliveriesControllers();
const deliveriesStatusControllers = new DeliveriesStatusControllers();

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));

deliveriesRoutes.post("/", deliveriesControllers.create);
deliveriesRoutes.get("/", deliveriesControllers.index);

deliveriesRoutes.patch("/:id/status", deliveriesStatusControllers.update);

export { deliveriesRoutes };
