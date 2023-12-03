import { EducationModel } from "../database/mongo/models/education.model";
import { BaseRepository } from "./baseRepository";


class EducationRepository extends BaseRepository {
  constructor() {
    super(EducationModel);
  }
}

export { EducationRepository };