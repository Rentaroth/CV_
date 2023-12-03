import { PortfolioModel } from "../database/mongo/models/portfolio.model";
import { BaseRepository } from "./baseRepository";

class PortfolioRepository extends BaseRepository {
  constructor() {
    super(PortfolioModel);
  }
}

export { PortfolioRepository }