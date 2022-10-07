import { IUser } from "../interfaces/User";
import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});
