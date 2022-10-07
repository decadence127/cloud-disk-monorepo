import { User } from "./../models/User";
import { authRepository } from "./../repositories/authRepository";
import { IUser, LoginUserData, RegUserData } from "../interfaces/User";
import bcrypt from "bcrypt";
class AuthService {
  async login(userData: LoginUserData) {
    const existingUser = await authRepository.getUserByEmail(userData.email);
    if (!existingUser) {
      return { msg: "This user does not exist." };
    }
    const comparePasswords = bcrypt.compareSync(
      userData.password,
      existingUser.password
    );
    if (!comparePasswords) {
      return { msg: "Passwords don't match." };
    }
    return existingUser;
  }
  async registration(userData: RegUserData) {
    const existingUser = await authRepository.getUserByEmail(userData.email);
    if (existingUser) {
      return { msg: "This user already exists." };
    }
    const hashPassword = bcrypt.hashSync(userData.password, 12);

    const result = User.create({ ...userData, password: hashPassword });
    return result;
  }
}

export const authService = new AuthService();
