import { User } from "../../database/mongo/models/ts_types";
import { UserRepository } from "../../repositories/userRepository";

class UserEntity extends UserRepository {
  name?: string;
  last_name?: string;
  email?: string;
  phone?: number;
  age?: number;
  country?: string;
  province?: string;
  github?: string;
  linkedin?: string;
  photo?: Buffer;
  resume?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(fields: User) {
    super();
    this.name = fields.name || undefined;
    this.last_name = fields.last_name || undefined;
    this.email = fields.email || undefined;
    this.phone = fields.phone || undefined;
    this.age = fields.age || undefined;
    this.country = fields.country || undefined;
    this.province = fields.province || undefined;
    this.github = fields.github || undefined;
    this.linkedin = fields.linkedin || undefined;
    this.photo = fields.photo || undefined;
    this.resume = fields.resume || undefined;
    this.created_at = fields.createdAt || undefined;
    this.updated_at = fields.updatedAt || undefined;
  }

  async userCreationMethod() {
    const { 
      name,
      last_name,
      email,
      phone,
      age,
      country,
      province,
      github,
      linkedin,
      photo,
      resume,
      created_at,
      updated_at,
    } = this;
    
    const data = {
      name,
      last_name,
      email,
      phone,
      age,
      country,
      province,
      github,
      linkedin,
      photo,
      resume,
      created_at,
      updated_at,
    }
    const result = await this.create(data)
    return result;
  }
}

export { UserEntity }