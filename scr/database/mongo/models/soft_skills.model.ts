import { model, Schema } from "mongoose";
import { Skills } from "../../../config/ts_types";

const softSkills = new Schema<Skills>({
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
});

const SoftSkillsModel = model<Skills>('Soft_skills', softSkills);

export { SoftSkillsModel };