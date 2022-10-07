import { IUser } from "../interfaces/User";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface IUserSchema extends IUser {
  createdAt: Date | string;
  updatedAt: Date | string;
}

export const UserSchema = new Schema<IUserSchema>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  avatar: String,
});
