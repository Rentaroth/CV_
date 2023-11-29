import { ExperienceModel } from "../database/mongo/models/experience.model";
import { BaseRepository } from "./baseRepository";

class ExperienceRepository extends BaseRepository {
  constructor() {
    super(ExperienceModel)
  }
}

export { ExperienceRepository }