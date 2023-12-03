import { SoftSkillsModel } from "../database/mongo/models/soft_skills.model";
import { BaseRepository } from "./baseRepository";

class SoftSkillsrepository extends BaseRepository {
  constructor() {
    super(SoftSkillsModel);
  }
}

export { SoftSkillsrepository }