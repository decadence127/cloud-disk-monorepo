import { RegUserData } from "./../interfaces/User";
import { User } from "../models/User";

class AuthRepository {
  async getUserByEmail(email: string) {
    const user = User.findOne({ email }).lean();
    return user;
  }
  async createUser(userData: RegUserData) {
    const result = User.create(userData);
  }
}

export const authRepository = new AuthRepository();
