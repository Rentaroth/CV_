import { LanguageModel } from "../database/mongo/models/languages.model";
import { BaseRepository } from "./baseRepository";

class LanguagesRepository extends BaseRepository {
  constructor() {
    super(LanguageModel)
  }
}

export { LanguagesRepository }