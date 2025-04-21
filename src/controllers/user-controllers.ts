import { Request, Response, NextFunction } from "express";
import { hash } from "bcrypt";
import { z } from "zod";
import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/app-error";

class UsersControllers {
  async create(resquest: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = bodySchema.parse(resquest.body);

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } });

    if (userWithSameEmail) {
      throw new AppError("user with same email already exists");
    }

    const hashedPassword = await hash(password, 8);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const { password: _, ...userWithoutPassword } = user;

    return response.status(201).json(userWithoutPassword);
  }
}

export { UsersControllers };
