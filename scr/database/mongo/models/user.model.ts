import { Schema, model } from "mongoose";
import { User } from "../../../config/ts_types";

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
  createdAt: Date,
  updatedAt: Date,
});

const UserModel = model<User>('User', user);

export { UserModel };