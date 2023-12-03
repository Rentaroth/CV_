import { model, Schema } from "mongoose";
import { Portfolio } from "../../../config/ts_types";

const portfolio = new Schema<Portfolio>({
  id: String,
  name: String,
  description: String,
  thumbnail: String,
  github: String,
  web: String,
  createdAt: Date,
  updatedAt: Date,
});

const PortfolioModel = model('Portfolio', portfolio);

export { PortfolioModel };