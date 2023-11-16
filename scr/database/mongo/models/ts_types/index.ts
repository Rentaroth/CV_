import { ObjectId } from "mongoose";

interface User {
  id?: ObjectId,
  name?: string,
  last_name?: string,
  email?: string,
  phone?: number,
  age?: number,
  country?: string,
  province?: string,
  github?: string,
  linkedin?: string,
  photo?: Buffer,
  resume?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export { User }