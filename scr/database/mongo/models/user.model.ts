import mongoose from "mongoose";
import { User } from "./ts_types";

const { Schema, model } = mongoose;

const user = new Schema<User>({
  name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  phone: Number,
  age: Number,
  country: String,
  province: String,
  github: String,
  linkedin: String,
  photo: Buffer,
  resume: String,
});

const UserModel = model<User>('User', user);

export { UserModel };