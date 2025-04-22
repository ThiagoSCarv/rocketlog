import { Router } from "express";
import { DeliveriesControllers } from "@/controllers/deliveries-controllers";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const deliveriesRoutes = Router();
const deliveriesControllers = new DeliveriesControllers();

deliveriesRoutes.use(
  ensureAuthenticated,
  verifyUserAuthorization(["sale"])
);

deliveriesRoutes.post("/", deliveriesControllers.create);
deliveriesRoutes.get("/", deliveriesControllers.index)

export { deliveriesRoutes };
