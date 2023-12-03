import { Skills } from "../../config/ts_types";
import { Skillsrepository } from "../../repositories/skillsRepository";

class SkillsEntity extends Skillsrepository {
  id?: string;
  name?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(fields: Skills) {
    super();
    this.id = fields.id;
    this.name = fields.name;
    this.description = fields.description;
    this.created_at = fields.createdAt;
    this.updated_at = fields.updatedAt;
  }

  async skillsCreationMethod() {
    const {
      name,
      description,
      created_at,
      updated_at,
    } = this;
    
    const data = {
      name,
      description,
      created_at,
      updated_at,
    }
    const result = await this.create(data)
    return result;
  }

  async skillsObtainMethod() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async skillsUpdateMethod() {
    const {
      id,
      name,
      description,
      updated_at,
    } = this;
    const data = {
      id,
      name,
      description,
      updated_at,
    };
    const result = await this.update(data, id);
    return result;
  }

  async skillsDeleteMethod() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

export { SkillsEntity };