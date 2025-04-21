import { Router } from "express";
import { UsersControllers } from "@/controllers/user-controllers";

const usersRoutes = Router();
const usersController = new UsersControllers();

usersRoutes.post("/", usersController.create);

export { usersRoutes };
