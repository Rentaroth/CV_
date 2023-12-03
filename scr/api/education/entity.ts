import { Education } from "../../config/ts_types";
import { EducationRepository } from "../../repositories/educationRepositroy";

class EducationEntity extends EducationRepository {
  id?: string;
  title?: string;
  description?: string;
  institute?: string;
  from?: string;
  to?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(fields: Education) {
    super();
    this.id = fields.id;
    this.title = fields.title;
    this.description = fields.description;
    this.institute = fields.institute;
    this.from = fields.from;
    this.to = fields.to;
    this.created_at = fields.createdAt;
    this.updated_at = fields.updatedAt;
  }

  async educationCreationMethod() {
    const {
      title,
      description,
      institute,
      from,
      to,
      created_at,
      updated_at,
    } = this;

    const data = {
      title,
      description,
      institute,
      from,
      to,
      created_at,
      updated_at,
    }

    const result = await this.create(data);
    return result;
  }

  async educationObtainMethod() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async educationUpdateMethod() {
    const {
      id,
      title,
      description,
      institute,
      from,
      to,
      created_at,
      updated_at,
    } = this;

    const data = {
      title,
      description,
      institute,
      from,
      to,
      created_at,
      updated_at,
    }
    const result = await this.update(data, id);
    return result;
  }

  async educationDeleteMethod() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

export { EducationEntity }