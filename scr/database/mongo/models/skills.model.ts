import { TopologyDescription } from "mongodb";
import { model, Schema } from "mongoose";
import { Skills } from "../../../config/ts_types";

const skills = new Schema<Skills>({
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
});

const SkillsModel = model<Skills>('Skills', skills);

export { SkillsModel };