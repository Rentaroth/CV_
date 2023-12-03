import { Portfolio } from "../../config/ts_types";
import { PortfolioRepository } from "../../repositories/portfolioRepository";

class PortfolioEntity extends PortfolioRepository {
  id?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  github?: string;
  web?: string;
  created_at?: Date;
  updated_at?: Date;
  
  constructor(fields: Portfolio) {
    super();
    this.id = fields.id;
    this.name = fields.name;
    this.description = fields.description;
    this.thumbnail = fields.thumbnail;
    this.github = fields.github;
    this.web = fields.web;
    this.created_at = fields.createdAt;
    this.updated_at = fields.updatedAt;
  }

  async portfolioCreationMethod() {
    const {
      name,
      description,
      thumbnail,
      github,
      web,
      created_at,
      updated_at,
    } = this;
    
    const data = {
      name,
      description,
      thumbnail,
      github,
      web,
      created_at,
      updated_at,
    }
    const result = await this.create(data)
    return result;
  }

  async portfolioObtainMethod() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async portfolioUpdateMethod() {
    const {
      id,
      name,
      description,
      thumbnail,
      github,
      web,
      updated_at,
    } = this;
    const data = {
      id,
      name,
      description,
      thumbnail,
      github,
      web,
      updated_at,
    };
    const result = await this.update(data, id);
    return result;
  }

  async portfolioDeleteMethod() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

export { PortfolioEntity }