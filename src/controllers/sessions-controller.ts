import { Request, Response, NextFunction } from "express";

class SessionsControllers {
  async create(resquest: Request, response: Response, next: NextFunction) {
    return response.json({ message: "ok" });
  }
}

export { SessionsControllers };
