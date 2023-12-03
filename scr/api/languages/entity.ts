import { Languages } from "../../config/ts_types";
import { LanguagesRepository } from "../../repositories/languagesRepository";

class LanguagesEntity extends LanguagesRepository {
  id?: string;
  name?: string;
  level?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(fields: Languages) {
    super();
    this.id = fields.id;
    this.name = fields.name;
    this.level = fields.level;
    this.created_at = fields.createdAt;
    this.updated_at = fields.updatedAt;
  }

  async languagesCreationMethod() {
    const {
      name,
      level,
      created_at,
      updated_at,
    } = this;
    
    const data = {
      name,
      level,
      created_at,
      updated_at,
    }
    const result = await this.create(data)
    return result;
  }

  async languagesObtainMethod() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async languagesUpdateMethod() {
    const {
      id,
      name,
      level,
      updated_at,
    } = this;
    const data = {
      id,
      name,
      level,
      updated_at,
    };
    const result = await this.update(data, id);
    return result;
  }

  async languagesDeleteMethod() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

export { LanguagesEntity };