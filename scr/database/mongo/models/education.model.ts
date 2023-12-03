import { model, Schema } from "mongoose";
import { Education } from "../../../config/ts_types";

const education = new Schema<Education>({
  title: String,
  description: String,
  institute: String,
  from: String,
  to: String,
  createdAt: Date,
  updatedAt: Date,
})

const EducationModel = model<Education>('Education', education);

export { EducationModel }