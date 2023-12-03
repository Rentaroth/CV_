import { model, Schema } from "mongoose";
import { Languages } from "../../../config/ts_types";

const languages = new Schema<Languages>({
  name: String,
  level: String,
  createdAt: Date,
  updatedAt: Date,
});

const LanguageModel = model('Languages', languages);

export { LanguageModel }