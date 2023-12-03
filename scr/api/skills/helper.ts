import { Skills } from "../../config/ts_types";
import { SkillsEntity } from "./entity";

async function createSkillsHelper(data: Skills) {
  const info = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const entity = new SkillsEntity(info);
  try {
    const result = await entity.skillsCreationMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function obtainSkillsHelper(id: string) {
  const entity = new SkillsEntity({ id });
  try {
    const result = await entity.skillsObtainMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function updateSkillsHelper(id: string, data: Skills) {
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new SkillsEntity(info);
  try {
    const result = await entity.skillsUpdateMethod();
    return result;
  } catch (error) {
    console.error(error)
  }
}

async function deleteSkillsHelper(id: string) {
  const entity = new SkillsEntity({ id });
  try {
    const result = await entity.skillsDeleteMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export {
  createSkillsHelper,
  obtainSkillsHelper,
  updateSkillsHelper,
  deleteSkillsHelper,
}