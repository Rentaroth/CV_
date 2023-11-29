import { User } from "../../config/ts_types";
import { UserRepository } from "../../repositories/userRepository";

class UserEntity extends UserRepository {
  id?: string;
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
    this.id = fields.id;
    this.name = fields.name;
    this.last_name = fields.last_name;
    this.email = fields.email;
    this.phone = fields.phone;
    this.age = fields.age;
    this.country = fields.country;
    this.province = fields.province;
    this.github = fields.github;
    this.linkedin = fields.linkedin;
    this.photo = fields.photo;
    this.resume = fields.resume;
    this.created_at = fields.createdAt;
    this.updated_at = fields.updatedAt;
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

  async userReadMethod() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async userUpdateMethod() {
    const {
      id,
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
      updated_at,
    }

    const result = await this.update(data, id);
    return result;
  }

  async userDeleteMethod() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

export { UserEntity }