import { User } from "../models/User";

class AuthRepository {
  async getUserByEmail(email: string) {
    const user = User.findOne({ email });
    return user;
  }
}

export const authRepository = new AuthRepository();
