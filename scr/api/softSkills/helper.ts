import { Skills } from "../../config/ts_types";
import { SoftSkillsEntity } from "./entity";

async function createSoftSkillsHelper(data: Skills) {
  const info = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const entity = new SoftSkillsEntity(info);
  try {
    const result = await entity.softSkillsCreationMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function obtainSoftSkillsHelper(id: string) {
  const entity = new SoftSkillsEntity({ id });
  try {
    const result = await entity.softSkillsObtainMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function updateSoftSkillsHelper(id: string, data: Skills) {
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new SoftSkillsEntity(info);
  try {
    const result = await entity.softSkillsUpdateMethod();
    return result;
  } catch (error) {
    console.error(error)
  }
}

async function deleteSoftSkillsHelper(id: string) {
  const entity = new SoftSkillsEntity({ id });
  try {
    const result = await entity.softSkillsDeleteMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export {
  createSoftSkillsHelper,
  obtainSoftSkillsHelper,
  updateSoftSkillsHelper,
  deleteSoftSkillsHelper,
}