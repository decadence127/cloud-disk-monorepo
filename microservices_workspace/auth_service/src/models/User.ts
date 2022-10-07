import { UserSchema } from "../schemas/UserSchema";
import { IUser } from "../interfaces/User";
import { model } from "mongoose";

export const User = model<IUser>("User", UserSchema);
