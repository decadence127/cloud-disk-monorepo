export interface IUser {
  name: string;
  surname: string;
  email: string;
  avatar?: string;
}

export interface LoginUserData
  extends Omit<IUser, "avatar" | "name" | "surname"> {
  password: string;
}
export interface RegUserData extends LoginUserData, Omit<IUser, "avatar"> {
  phoneNumber: string;
}
