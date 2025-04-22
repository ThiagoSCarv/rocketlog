import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { prisma } from "@/database/prisma";
import { authConfig } from "@/configs/auth";
import { AppError } from "@/utils/app-error";

export class DeliveriesControllers {
  async create(request: Request, response: Response, next: NextFunction) {
    return response.json({ message: "ok" });
  }
}
