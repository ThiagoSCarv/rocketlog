import { Router } from "express";
import { DeliveryLogsControllers } from "@/controllers/delivery-logs-controllers";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

const deliveryLogsRoutes = Router();
const deliveryLogsControllers = new DeliveryLogsControllers();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogsControllers.create
);

deliveryLogsRoutes.get(
  "/:delivery_id/show",
  ensureAuthenticated,
  verifyUserAuthorization(["customer", "sale"]),
  deliveryLogsControllers.show
);

export { deliveryLogsRoutes };
