import { Languages } from "../../config/ts_types";
import { LanguagesEntity } from "./entity";

async function createLanguagesHelper(data: Languages) {
  const info = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const entity = new LanguagesEntity(info);
  try {
    const result = await entity.languagesCreationMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function obtainLanguagesHelper(id: string) {
  const entity = new LanguagesEntity({ id });
  try {
    const result = await entity.languagesObtainMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function updateLanguagesHelper(id: string, data: Languages) {
  const info = {
    id,
    ...data,
    updatedAt: new Date(),
  }
  const entity = new LanguagesEntity(info);
  try {
    const result = await entity.languagesUpdateMethod();
    return result;
  } catch (error) {
    console.error(error)
  }
}

async function deleteLanguagesHelper(id: string) {
  const entity = new LanguagesEntity({ id });
  try {
    const result = await entity.languagesDeleteMethod();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export {
  createLanguagesHelper,
  obtainLanguagesHelper,
  updateLanguagesHelper,
  deleteLanguagesHelper,
}