import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.info("Connected to the auth database");
  } catch (e) {
    throw e;
  }
};
