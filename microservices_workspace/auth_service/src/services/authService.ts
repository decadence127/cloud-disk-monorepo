import { IUser, LoginUserData } from "../interfaces/User";

class AuthService {
  async login(userData: LoginUserData) {}
}

export const authService = new AuthService();
