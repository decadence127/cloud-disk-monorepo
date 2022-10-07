import express from "express";
import { authService } from "../services/authService";
class AuthController {
  async login(req: express.Request, res: express.Response) {
    try {
      const userData = req.body;
      const result = await authService.login(userData);
      res.send(result);
    } catch (e) {
      res.status(500).send({ msg: "Internal Error" });
    }
  }

  async registration(req: express.Request, res: express.Response) {}
}
export default new AuthController();
