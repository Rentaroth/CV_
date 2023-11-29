import { Experience } from "../../config/ts_types";
import { ExperienceEntity } from "./entity";

async function createExperienceHelper(data: Experience) {
  const info = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const entity = new ExperienceEntity(info);
  const result = await entity.experienceCreationMethod();
  return result;
}

async function obtainExperienceHelper(id: string) {
  const entity = new ExperienceEntity({ id });
  const result = await entity.experienceObtainMethod();
  return result;
}

async function updateExperienceHelper(id: string, data: Experience) {
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new ExperienceEntity(info);
  const result = await entity.experienceUpdateMethod();
  return result;
}

async function deleteExperienceHelper(id: string) {
  const entity = new ExperienceEntity({ id });
  const result = await entity.experienceDeleteMethod();
  return result;
}

export {
  createExperienceHelper,
  obtainExperienceHelper,
  updateExperienceHelper,
  deleteExperienceHelper,
}