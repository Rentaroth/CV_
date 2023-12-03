import { Types } from "mongoose";

interface User {
  id?: string,
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

interface Experience {
  id?: string,
  position?: string,
  company?: string,
  description?: string,
  serviceTime?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

interface Education {
  id?: string,
  title?: string,
  description?: string,
  institute?: string,
  from?: string,
  to?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export { User, Experience, Education }