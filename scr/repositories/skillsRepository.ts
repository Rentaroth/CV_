import { SkillsModel } from "../database/mongo/models/skills.model";
import { BaseRepository } from "./baseRepository";

class Skillsrepository extends BaseRepository {
  constructor() {
    super(SkillsModel);
  }
}

export { Skillsrepository }