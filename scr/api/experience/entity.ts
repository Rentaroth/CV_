import { Experience } from "../../config/ts_types";
import { ExperienceRepository } from "../../repositories/experienceRepository";

class ExperienceEntity extends ExperienceRepository {
  id?: string;
  position?: string;
  company?: string;
  description?: string;
  serviceTime?: string;
  created_at?: Date;
  updated_at?: Date;
  
  constructor(fields: Experience) {
    super()
    this.id = fields.id;
    this.position = fields.position;
    this.company = fields.company;
    this.description = fields.description;
    this.serviceTime = fields.serviceTime;
    this.created_at = fields.createdAt;
    this.updated_at = fields.updatedAt;
  }

  async experienceCreationMethod() {
    const {
      id,
      position,
      company,
      description,
      serviceTime,
      created_at,
      updated_at,
    } = this;

    const data = {
      id,
      position,
      company,
      description,
      serviceTime,
      created_at,
      updated_at,
    }
    const result = await this.create(data);
    return result;
  }

  async experienceObtainMethod() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async experienceUpdateMethod() {
    const {
      id,
      position,
      company,
      description,
      serviceTime,
      updated_at,
    } = this;

    const data = {
      position,
      company,
      description,
      serviceTime,
      updated_at,
    }
    const result = await this.update(data, id);
    return result;
  }

  async experienceDeleteMethod() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

export { ExperienceEntity }