import { model, Schema } from "mongoose";
import { Experience } from "../../../config/ts_types";

const experience = new Schema<Experience>({
  id: String,
  position: String,
  company: String,
  description: String,
  serviceTime: String,
  createdAt: Date,
  updatedAt: Date,
})

const ExperienceModel = model<Experience>('Experience', experience);

export { ExperienceModel }